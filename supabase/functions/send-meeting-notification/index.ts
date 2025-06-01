
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const { name, email, date, time } = await req.json()
  
  try {
    // Create calendar event data
    const eventDate = new Date(`${date} ${time}`)
    const endDate = new Date(eventDate.getTime() + 15 * 60000) // 15 minutes later
    
    const calendarEvent = {
      start: eventDate.toISOString(),
      end: endDate.toISOString(),
      summary: "15-min Google Meet with Salvador Villarroel",
      description: "Scheduled meeting via website contact form"
    }

    // Send notification to Salvador
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com',
        to: ['salvador.vh05@gmail.com'],
        subject: 'New Meeting Scheduled',
        html: `
          <h2>New Meeting Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Duration:</strong> 15 minutes</p>
        `
      }),
    })

    // Send confirmation to user with calendar invite
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com',
        to: [email],
        subject: 'Meeting Confirmed - Add to Calendar',
        html: `
          <h2>Meeting Confirmed!</h2>
          <p>Hi ${name},</p>
          <p>Your 15-minute meeting with Salvador Villarroel has been confirmed for:</p>
          <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${time}</p>
          
          <h3>Add to Calendar</h3>
          <p>Click the link below to add this meeting to your calendar:</p>
          <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting%20with%20Salvador%20Villarroel&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=15-minute%20scheduled%20meeting&location=Google%20Meet" 
             style="background-color: #4285f4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">
            Add to Google Calendar
          </a>
          
          <p>Or copy this to your calendar app:</p>
          <div style="background-color: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px;">
            <strong>Event:</strong> Meeting with Salvador Villarroel<br>
            <strong>Date:</strong> ${new Date(date).toLocaleDateString()}<br>
            <strong>Time:</strong> ${time}<br>
            <strong>Duration:</strong> 15 minutes
          </div>
          
          <p>Looking forward to our conversation!</p>
        `
      }),
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Emails sent successfully',
        calendarEvent 
      }),
      { headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    )
  }
})
