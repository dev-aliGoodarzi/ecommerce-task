"use client";
// React
import React from "react";
// React

// Links
import Link from "next/link";
// Links

const error = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <p className="text-2xl text-falseMain">
        هنگام پردازش درخواست شما مشکلی پیش آمده
      </p>
      <Link href={"/"}>باز گشت به خانه</Link>
    </div>
  );
};

export default error;
