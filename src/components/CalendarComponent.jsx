import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export default function CalendarComponent({ dateTime, setDateTime }) {
  function handleChange(date) {
    if (date) {
      const jsDate = date.toISOString();
      setDateTime(jsDate);
      console.log(jsDate);
    }
  }

  return (
    <>
      <div className="relative pr-12">
        <Datetime
          timeFormat="HH:mm"
          className="rdtOpen  text-black rounded-md z-1 "
          onChange={handleChange}
        />
        <input type="hidden" name="calendar" value={dateTime} />
      </div>
    </>
  );
}

//<Calendar className="w-[60%] text-black rounded-md " value={value} onChange={handleCalendarDate} />
