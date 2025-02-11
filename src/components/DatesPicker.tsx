"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  onChange: (date: Date | null) => void;
}

export default function DatesPicker({ onChange }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      showIcon
      selected={selectedDate}
      onChange={(date) => {
        setSelectedDate(date);
        onChange(date);
      }}
      dateFormat="yyyy-MM-dd"
      className="w-full px-3 py-2 border rounded-md focus:outline-none text-primary-300"
      popperClassName="!z-30"
      placeholderText="Choose a date"
    />
  );
}
