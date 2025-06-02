
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";

interface TimeSlotSelectorProps {
  selectedDate: Date;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  availableTimeSlots: string[];
  bookedSlots: string[];
  isLoadingSlots: boolean;
}

const TimeSlotSelector = ({
  selectedDate,
  selectedTime,
  setSelectedTime,
  availableTimeSlots,
  bookedSlots,
  isLoadingSlots
}: TimeSlotSelectorProps) => {
  if (!selectedDate) return null;

  return (
    <div>
      <Label className="text-base font-medium flex items-center gap-2">
        <Clock className="w-4 h-4" />
        Available Times (15 minutes)
        {isLoadingSlots && <span className="text-sm text-gray-500">Loading...</span>}
      </Label>
      {isLoadingSlots ? (
        <div className="p-4 border rounded-md text-center text-gray-500">
          Loading available time slots...
        </div>
      ) : availableTimeSlots.length === 0 ? (
        <div className="p-4 border rounded-md text-center text-gray-500">
          No time slots available for this date. Please select another date.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 mt-2 max-h-60 overflow-y-auto p-2 border rounded-md">
          {availableTimeSlots.map((time) => (
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
      )}
      {bookedSlots.length > 0 && (
        <p className="text-xs text-gray-500 mt-2">
          {bookedSlots.length} time slot(s) already booked for this date
        </p>
      )}
    </div>
  );
};

export default TimeSlotSelector;
