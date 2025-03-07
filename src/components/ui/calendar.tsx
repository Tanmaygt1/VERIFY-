import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, useNavigation, Month } from "react-day-picker";
import { format } from "date-fns";

interface CalendarProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function Calendar({ date, setDate }: CalendarProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  // Custom header for navigating months
  const CustomHeader = () => (
    <div className="flex items-center justify-between p-2">
      <button
        onClick={() => previousMonth && goToMonth(previousMonth)}
        className="text-gray-600"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <span className="font-medium">{date ? format(date, "MMMM yyyy") : format(new Date(), "MMMM yyyy")}</span>
      <button
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className="text-gray-600"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="rounded-lg border bg-white p-4 shadow-md">
      <CustomHeader />  {/* Use CustomHeader for month navigation */}
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        className="p-2"
        fromMonth={new Date(2020, 0)}
        toMonth={new Date(2030, 11)}
        footer={
          date && (
            <p className="text-center text-sm text-gray-500">
              Selected Date: {format(date, "PPP")}
            </p>
          )
        }
      />
    </div>
  );
}
