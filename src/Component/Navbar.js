import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-screen flex text-white justify-center sm:justify-between items-center py-4 px-5" style={{ background: 'linear-gradient(to right, #49a09d, #5f2c82)' }} >
      <Link href="/">
        <h1 className="hidden  sm:flex font-bold text-xl">
         <span className=" text-white">Home</span>
        </h1>
      </Link>
      <ul className="flex space-x-5 cursor-pointer">
        <Link href="/streamchart">StreamChart</Link>
        <Link href="/piechart">PieChart</Link>
       
        <Link href="/barchart">BarChart</Link>
        <Link href="/datePicker">DatePicker</Link>
        <Link href="/calender">Calendar</Link>
      </ul>
    </div>
  );
}
