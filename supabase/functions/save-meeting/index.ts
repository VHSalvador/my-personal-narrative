
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SaveMeetingRequest {
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

    const { fullName, email, meetingDate, meetingTime }: SaveMeetingRequest = await req.json();

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

    console.log("Saving meeting to database:", {
      full_name: fullName.trim(),
      email: email.toLowerCase().trim(),
      meeting_date: meetingDate,
      meeting_time: meetingTime
    });

    // Save meeting to database using service role
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
      throw new Error(`Failed to save meeting: ${meetingError.message}`);
    }

    console.log("Meeting saved successfully:", meetingData);

    return new Response(JSON.stringify({
      success: true,
      meeting: meetingData
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in save-meeting function:", error);
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
