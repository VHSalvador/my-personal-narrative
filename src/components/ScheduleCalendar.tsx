
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { useMeetingBooking } from "@/hooks/useMeetingBooking";
import MeetingForm from "./meeting/MeetingForm";
import TimeSlotSelector from "./meeting/TimeSlotSelector";
import MeetingSummary from "./meeting/MeetingSummary";

const ScheduleCalendar = () => {
  const {
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
  } = useMeetingBooking();

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
              <MeetingForm
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
              />

              <TimeSlotSelector
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                availableTimeSlots={availableTimeSlots}
                bookedSlots={bookedSlots}
                isLoadingSlots={isLoadingSlots}
              />
            </div>
          </div>

          <MeetingSummary selectedDate={selectedDate} selectedTime={selectedTime} />

          <Button
            type="submit"
            disabled={!selectedDate || !selectedTime || !fullName || !email || isSubmitting || isLoadingSlots}
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
