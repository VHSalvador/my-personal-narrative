
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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
    const { fullName, email, meetingDate, meetingTime }: MeetingNotificationRequest = await req.json();

    // Format the date for better readability
    const formattedDate = new Date(meetingDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send notification email to salvador.vh05@gmail.com
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
      `,
    });

    // Send confirmation email to the person who booked
    const userEmailResponse = await resend.emails.send({
      from: "Meeting Scheduler <onboarding@resend.dev>",
      to: [email],
      subject: "Meeting Request Approved",
      html: `
        <h1>Your Meeting Has Been Approved!</h1>
        <p>Dear ${fullName},</p>
        <p>Your meeting request has been approved for:</p>
        <ul>
          <li><strong>Date:</strong> ${formattedDate}</li>
          <li><strong>Time:</strong> ${meetingTime}</li>
        </ul>
        <p>We'll send you a Google Meet link closer to the meeting time.</p>
        <p>If you need to reschedule or have any questions, please reply to this email.</p>
        <p>Best regards,<br>The Team</p>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);
    console.log("User email sent:", userEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
