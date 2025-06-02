
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

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  // Name validation function - only letters, spaces, minimum 2 characters
  const isValidName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced validation
    if (!selectedDate || !selectedTime || !fullName || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select a date and time.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidName(fullName)) {
      toast({
        title: "Invalid Name",
        description: "Name must contain only letters and spaces, minimum 2 characters.",
        variant: "destructive",
      });
      return;
    }

    // Check if selected date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      toast({
        title: "Invalid Date",
        description: "Please select a future date.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format date consistently for database storage (YYYY-MM-DD)
      const formattedDate = selectedDate.toISOString().split('T')[0];
      
      console.log("Attempting to save meeting:", {
        full_name: fullName.trim(),
        email: email.toLowerCase().trim(),
        meeting_date: formattedDate,
        meeting_time: selectedTime
      });

      // Use the Edge Function to handle both database save and email notifications
      // This bypasses RLS by using the service role in the Edge Function
      const { data: emailData, error: emailError } = await supabase.functions.invoke(
        'send-meeting-notification',
        {
          body: {
            fullName: fullName.trim(),
            email: email.toLowerCase().trim(),
            meetingDate: formattedDate,
            meetingTime: selectedTime
          }
        }
      );

      if (emailError) {
        console.error('Meeting scheduling error:', emailError);
        throw new Error(`Failed to schedule meeting: ${emailError.message}`);
      }

      console.log("Meeting scheduled successfully:", emailData);
      
      toast({
        title: "Meeting Scheduled!",
        description: `Your meeting has been scheduled for ${format(selectedDate, "PPP")} at ${selectedTime}. You'll receive a confirmation email shortly.`,
      });
      
      // Reset form
      setSelectedDate(undefined);
      setSelectedTime("");
      setFullName("");
      setEmail("");
    } catch (error: any) {
      console.error('Error scheduling meeting:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to schedule the meeting. Please try again.",
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
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today || date.getDay() === 0 || date.getDay() === 6;
                }}
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
                  minLength={2}
                  maxLength={100}
                  pattern="[a-zA-Z\s]{2,}"
                  title="Name must contain only letters and spaces, minimum 2 characters"
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
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  title="Please enter a valid email address"
                />
              </div>

              {selectedDate && (
                <div>
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Available Times (15 minutes)
                  </Label>
                  <div className="grid grid-cols-2 gap-2 mt-2 max-h-60 overflow-y-auto p-2 border rounded-md">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="justify-start text-sm"
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
