import Button from "../Button/Button";
import "./CategoryCard.css";
import { useEffect, useState } from "react";

interface CategoryCardProps {
  title: string;
  heading: string;
  showArrows?: boolean;
  showButton?: boolean;
  showCounter?: boolean;
  controls?: React.ReactNode;
}

export default function CategoryCard({
  title,
  heading,
  showButton,
  showCounter,
  controls,
}: CategoryCardProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    if (!showCounter) return;

    const totalSeconds = 3 * 24 * 60 * 60 + 23 * 60 * 60 + 19 * 60 + 56;
    const targetTime = Date.now() + totalSeconds * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [showCounter]);

  return (
    <div className="container">
      <div className="category-card">
        <div className="top">
          <div className="text-block">
            <div className="red-block"></div>
            <p className="category-title">{title}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <h3 className="category-heading">{heading}</h3>
            {showCounter && (
              <div className="counter">
                <div className="days">
                  <span>Days</span>{" "}
                  <h3>{timeLeft.days.toString().padStart(2, "0")}</h3>
                </div>
                <span className="separator">:</span>
                <div className="days">
                  <span>Hours</span>{" "}
                  <h3>{timeLeft.hours.toString().padStart(2, "0")}</h3>
                </div>
                <span className="separator">:</span>
                <div className="days">
                  <span>Minutes</span>{" "}
                  <h3>{timeLeft.minutes.toString().padStart(2, "0")}</h3>
                </div>
                <span className="separator">:</span>
                <div className="days">
                  <span>Seconds</span>{" "}
                  <h3>{timeLeft.seconds.toString().padStart(2, "0")}</h3>
                </div>
              </div>
            )}
          </div>
          {showButton && <Button title="See All" />}
          {controls && controls}
        </div>
      </div>
    </div>
  );
}
