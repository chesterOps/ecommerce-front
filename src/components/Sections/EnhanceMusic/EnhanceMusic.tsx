import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./EnhanceSection.css";

const EnhanceMusic = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startFromNow = Date.now();
    const totalSeconds = 5 * 24 * 60 * 60 + 24 * 60 * 60 + 59 * 60 + 35;
    const targetDate = new Date(startFromNow + totalSeconds * 1000);
    console.log(targetDate);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 25; 
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="enhance-music">
      <div className="left">
        <div className="category-text">
          <h3>Categories</h3>
          <h1>Enhance Your Music Experience</h1>

          <div className="counter">
            <div className="circle-box">
              <b>{timeLeft.days}</b>
              <span>Days</span>
            </div>
            <div className="circle-box">
              <b>{timeLeft.hours}</b>
              <span>Hours</span>
            </div>
            <div className="circle-box">
              <b>{timeLeft.minutes}</b>
              <span>Minutes</span>
            </div>
            <div className="circle-box">
              <b>{timeLeft.seconds}</b>
              <span>Seconds</span>
            </div>
          </div>
          <Button title="Buy Now!" />
        </div>
      </div>
      <img
        src="/src/assets/speaker-jbl.png"
        alt="Speaker"
        className="speaker-img"
      />
    </div>
  );
};

export default EnhanceMusic;
