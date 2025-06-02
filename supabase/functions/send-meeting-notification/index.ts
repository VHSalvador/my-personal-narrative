
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface MeetingNotificationRequest {
  fullName: string;
  email: string;
  meetingDate: string;
  meetingTime: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate request method
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check if RESEND_API_KEY is configured
    if (!Deno.env.get("RESEND_API_KEY")) {
      console.error("RESEND_API_KEY environment variable is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { fullName, email, meetingDate, meetingTime }: MeetingNotificationRequest = await req.json();

    // Validate required fields
    if (!fullName || !email || !meetingDate || !meetingTime) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate name (at least 2 characters, only letters and spaces)
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!nameRegex.test(fullName.trim())) {
      return new Response(
        JSON.stringify({ error: "Invalid name format. Name must contain only letters and spaces, minimum 2 characters." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create Supabase client with service role key to bypass RLS
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    console.log("Saving meeting to database:", {
      full_name: fullName.trim(),
      email: email.toLowerCase().trim(),
      meeting_date: meetingDate,
      meeting_time: meetingTime
    });

    // Save meeting to database using service role to bypass RLS
    const { data: meetingData, error: meetingError } = await supabaseAdmin
      .from('meetings')
      .insert({
        full_name: fullName.trim(),
        email: email.toLowerCase().trim(),
        meeting_date: meetingDate,
        meeting_time: meetingTime
      })
      .select()
      .single();

    if (meetingError) {
      console.error('Meeting save error:', meetingError);
      return new Response(
        JSON.stringify({ error: `Failed to save meeting: ${meetingError.message}` }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Meeting saved successfully:", meetingData);

    // Parse and format the date for better readability
    let formattedDate: string;
    try {
      const dateObj = new Date(meetingDate + 'T00:00:00.000Z');
      formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
      });
    } catch (error) {
      console.error('Date parsing error:', error);
      formattedDate = meetingDate; // Fallback to original date string
    }

    console.log("Processing meeting notification:", {
      fullName,
      email,
      meetingDate,
      meetingTime,
      formattedDate
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Meeting Scheduler <onboarding@resend.dev>",
      to: ["salvador.vh05@gmail.com"],
      subject: "New Meeting Scheduled",
      html: `
        <h1>New Meeting Request</h1>
        <p>A new meeting has been scheduled with the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Date:</strong> ${formattedDate}</li>
          <li><strong>Time:</strong> ${meetingTime}</li>
        </ul>
        <p>Please review and confirm this meeting.</p>
        <p><em>Meeting ID: ${meetingData.id}</em></p>
      `,
    });

    // Send confirmation email to the person who booked
    const userEmailResponse = await resend.emails.send({
      from: "Meeting Scheduler <onboarding@resend.dev>",
      to: [email],
      subject: "Meeting Request Confirmed",
      html: `
        <h1>Your Meeting Has Been Confirmed!</h1>
        <p>Dear ${fullName},</p>
        <p>Your meeting request has been received and confirmed for:</p>
        <ul>
          <li><strong>Date:</strong> ${formattedDate}</li>
          <li><strong>Time:</strong> ${meetingTime} (15 minutes)</li>
        </ul>
        <p>We'll send you a Google Meet link closer to the meeting time.</p>
        <p>If you need to reschedule or have any questions, please reply to this email.</p>
        <p>Best regards,<br>The Team</p>
        <hr>
        <p><small>This is an automated confirmation. Please keep this email for your records.</small></p>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);
    console.log("User email sent:", userEmailResponse);

    // Check for email sending errors
    if (adminEmailResponse.error) {
      console.error("Admin email error:", adminEmailResponse.error);
    }
    if (userEmailResponse.error) {
      console.error("User email error:", userEmailResponse.error);
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: "Meeting scheduled and notifications sent",
      meeting: meetingData,
      adminEmailId: adminEmailResponse.data?.id,
      userEmailId: userEmailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-meeting-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        message: error.message || "Unknown error occurred"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
