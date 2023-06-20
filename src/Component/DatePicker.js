import { parse } from "path";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Example() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", margin: "1rem" }}>
          Date:
       
        <DatePicker
          className="datepicker"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            alert("view console");
            console.log(startDate.toISOString());
          }}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
          showIcon
          isClearable
          showMonthDropdown
          showYearDropdown
          scrollableYearDropdown
        />
      </div>
    </>
  );
}
