
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

const ScheduleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  // Generate 15-minute time slots from 9 AM to 5 PM
  const timeSlots = [
    "09:00", "09:15", "09:30", "09:45",
    "10:00", "10:15", "10:30", "10:45",
    "11:00", "11:15", "11:30", "11:45",
    "12:00", "12:15", "12:30", "12:45",
    "13:00", "13:15", "13:30", "13:45",
    "14:00", "14:15", "14:30", "14:45",
    "15:00", "15:15", "15:30", "15:45",
    "16:00", "16:15", "16:30", "16:45"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !fullName || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields and select a date and time.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Submitting meeting data:", {
        name: fullName,
        email,
        meeting_date: format(selectedDate, "yyyy-MM-dd"),
        meeting_time: selectedTime
      });

      // Check if Supabase is properly configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        toast({
          title: "Configuration Error",
          description: "Supabase is not configured. Please connect your project to Supabase to enable meeting booking.",
          variant: "destructive",
        });
        return;
      }

      // Save to database
      const { data: meetingData, error: dbError } = await supabase
        .from('meetings')
        .insert({
          name: fullName,
          email,
          meeting_date: format(selectedDate, "yyyy-MM-dd"),
          meeting_time: selectedTime,
          status: 'confirmed'
        })
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save meeting to database");
      }

      console.log("Meeting saved to database:", meetingData);

      // Send email notifications
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-meeting-notification', {
        body: {
          name: fullName,
          email,
          date: format(selectedDate, "yyyy-MM-dd"),
          time: selectedTime
        }
      });

      if (emailError) {
        console.error("Email error:", emailError);
        // Don't throw error here - meeting is saved, just email failed
        toast({
          title: "Meeting Scheduled",
          description: `Your meeting has been scheduled for ${format(selectedDate, "PPP")} at ${selectedTime}. Email notifications may have failed to send.`,
          variant: "default",
        });
      } else {
        console.log("Email notifications sent:", emailData);
        toast({
          title: "Meeting Scheduled Successfully!",
          description: `Your 15-minute meeting has been scheduled for ${format(selectedDate, "PPP")} at ${selectedTime}. Check your email for confirmation and calendar invite.`,
        });
      }
      
      // Reset form
      setSelectedDate(undefined);
      setSelectedTime("");
      setFullName("");
      setEmail("");
    } catch (error) {
      console.error("Error scheduling meeting:", error);
      toast({
        title: "Error",
        description: "Failed to schedule the meeting. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-secondary">
          <CalendarIcon className="w-5 h-5" />
          Schedule a Google Meet call
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Calendar Section */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Select a Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                className="rounded-md border"
              />
            </div>

            {/* Form Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {selectedDate && (
                <div>
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Available Times (15 minutes)
                  </Label>
                  <div className="grid grid-cols-2 gap-2 mt-2 max-h-60 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="justify-start"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {selectedDate && selectedTime && (
            <div className="bg-primary-light p-4 rounded-lg border-l-4 border-accent">
              <p className="text-sm text-neutral-dark">
                <strong>Selected:</strong> {format(selectedDate, "PPP")} at {selectedTime} (15 minutes)
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={!selectedDate || !selectedTime || !fullName || !email || isSubmitting}
            className="w-full bg-accent hover:bg-accent-light text-primary-light"
          >
            {isSubmitting ? "Scheduling..." : "Schedule Call"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScheduleCalendar;
