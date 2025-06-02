
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

export const useMeetingBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);
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

  // Fetch booked slots for the selected date
  const fetchBookedSlots = async (date: Date) => {
    setIsLoadingSlots(true);
    try {
      const formattedDate = date.toISOString().split('T')[0];
      
      const { data: meetings, error } = await supabase
        .from('meetings')
        .select('meeting_time')
        .eq('meeting_date', formattedDate);

      if (error) {
        console.error('Error fetching booked slots:', error);
        toast({
          title: "Error",
          description: "Failed to load available time slots. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Extract time slots and convert to HH:MM format
      const booked = meetings?.map(meeting => {
        // meeting_time comes as HH:MM:SS, we need HH:MM
        return meeting.meeting_time.slice(0, 5);
      }) || [];
      
      setBookedSlots(booked);
      console.log('Booked slots for', formattedDate, ':', booked);
    } catch (error) {
      console.error('Error fetching booked slots:', error);
      toast({
        title: "Error",
        description: "Failed to load available time slots. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingSlots(false);
    }
  };

  // Effect to fetch booked slots when date changes
  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots(selectedDate);
      // Reset selected time when date changes
      setSelectedTime("");
    } else {
      setBookedSlots([]);
      setSelectedTime("");
    }
  }, [selectedDate]);

  // Get available time slots (excluding booked ones)
  const availableTimeSlots = timeSlots.filter(time => !bookedSlots.includes(time));

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

    // Check if the selected time slot is still available
    if (bookedSlots.includes(selectedTime)) {
      toast({
        title: "Time Slot Unavailable",
        description: "This time slot has been booked by someone else. Please select another time.",
        variant: "destructive",
      });
      // Refresh booked slots to get the latest data
      await fetchBookedSlots(selectedDate);
      setSelectedTime("");
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
      setBookedSlots([]);
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

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    fullName,
    setFullName,
    email,
    setEmail,
    isSubmitting,
    bookedSlots,
    isLoadingSlots,
    availableTimeSlots,
    handleSubmit
  };
};
