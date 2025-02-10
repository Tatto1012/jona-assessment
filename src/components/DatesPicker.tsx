"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatesPicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="yyyy-MM-dd"
      className="w-full px-3 py-2 border rounded-md focus:outline-none text-primary-300"
      popperClassName="z-30"
      placeholderText="Choose a date"
    />
  );
}
