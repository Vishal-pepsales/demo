import React from "react";

const Header = ({ company, subheading, questionNo, totalQuestion }) => {
  const progressWidth = (questionNo / totalQuestion) * 100;
  return (
    <div className="flex flex-col w-[100%] p-4 text-[#FFFFFF] font-[400] pb-0 gap-2">
      <div className="felx flex-col gap-0">
        <h2 className="text-left text-[14px]/[18.2px] font-sans pl-[1px]">
          {company}
        </h2>
        <h1 className="text-left font-[DM Sans] text-[24px]/[32.4px]">
          {subheading}
        </h1>
      </div>

      <div className="w-full h-[0.1rem] bg-[#EBFFF680] flex items-center">
        <div
          className="h-1 bg-[#AAEDD1]"
          style={{ width: `${progressWidth}%` }}
        />
      </div>

      <p className="text-right font-[DM Sans] text-[16px]/[20.83px]">
        {questionNo}/{totalQuestion}
      </p>
    </div>
  );
};

export default Header;
