import { useEffect, useState } from "react";
import DigitColumn from "../DigitColumn/DigitColumn";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculamos decenas y unidades
  const hourDec = Math.floor(time.hours / 10);
  const hourUni = time.hours % 10;
  const minDec = Math.floor(time.minutes / 10);
  const minUni = time.minutes % 10;
  const secDec = Math.floor(time.seconds / 10);
  const secUni = time.seconds % 10;

  return (
    <div className="clock-container">
      <DigitColumn digits={[0,1,2]} active={hourDec} />
      <DigitColumn digits={[0,1,2,3,4,5,6,7,8,9]} active={hourUni} />
      <DigitColumn digits={[0,1,2,3,4,5]} active={minDec} />
      <DigitColumn digits={[0,1,2,3,4,5,6,7,8,9]} active={minUni} />
      <DigitColumn digits={[0,1,2,3,4,5]} active={secDec} />
      <DigitColumn digits={[0,1,2,3,4,5,6,7,8,9]} active={secUni} />
    </div>
  );
};

export default Clock;
