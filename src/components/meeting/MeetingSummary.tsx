
import React from "react";
import { format } from "date-fns";

interface MeetingSummaryProps {
  selectedDate: Date;
  selectedTime: string;
}

const MeetingSummary = ({ selectedDate, selectedTime }: MeetingSummaryProps) => {
  if (!selectedDate || !selectedTime) return null;

  return (
    <div className="bg-primary-light p-4 rounded-lg border-l-4 border-accent">
      <p className="text-sm text-neutral-dark">
        <strong>Selected:</strong> {format(selectedDate, "PPP")} at {selectedTime} (15 minutes)
      </p>
    </div>
  );
};

export default MeetingSummary;
