'use client';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

export default function BookingCalender(): JSX.Element {
  const currentDate = new Date();
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return <Calendar id="test" mode="range" defaultMonth={currentDate} selected={range} onSelect={setRange} />;
}