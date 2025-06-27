import React, { useState } from "react";
import BigTitle from "./BigTitle";
import FormInput from "./FormInput";
import CalendarComponent from "./CalendarComponent";

export default function CalForm() {
  const [dateTime, setDateTime] = useState(); //calendar


  return (
    <div className=" bg-gradient-to-r from-[#F28CC1]/40 to-[#8E70B7]/40 p-2 md:p-1 w-[50%] h-[10%] rounded-md mt-72 md:mt-32 ">
      <div className="flex flex-col md:flex-row gap-12 justify-center  bg-white/70 rounded-sm md:px-24 md:py-24  h-[150%] ">
        <div className=" flex flex-col gap-12 opacity-100 ">
          <BigTitle text="agende sua consulta" />
          <FormInput dateTime={dateTime} />
        </div>
        <div className="calendar pb-72 md:pb-0">
          <CalendarComponent dateTime={dateTime} setDateTime={setDateTime}/>
        </div>
      </div>
    </div>
  );
}
