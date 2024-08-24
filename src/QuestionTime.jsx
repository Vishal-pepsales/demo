import React, { useEffect, useState } from "react";

const QuestionTime = ({ inTime, dangerTime, Question }) => {
  const [time, setTime] = useState(0);
  const [timeBackground, setTimeBackground] = useState("transparent");
  const [timeColor, setTimeColor] = useState("#A1A6A6");

  useEffect(() => {
    setTime(0);
    setTimeBackground("transparent");
    setTimeColor("#A1A6A6");
  }, [Question]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (time >= inTime) {
      setTimeBackground("#FFDF22");
      setTimeColor("#004327");
    }
    if (time >= inTime + dangerTime) {
      setTimeBackground("#FF4157");
      setTimeColor("#FFFFFF");
    }
  }, [time, inTime]);

  return (
    <div
      className="w-[55px] h-[18px] p-[4px] flex gap-[10px] font-[DM Sans] text-[10px]/[10px] font-[700] rounded-full justify-center text-left items-center tracking-wider absolute top-96 left-[420px]"
      style={{ backgroundColor: timeBackground, color: timeColor }}
    >
      ~{inTime} mins
    </div>
  );
};

export default QuestionTime;
