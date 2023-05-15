import { useState, useEffect } from 'react';

export const useCountdown = ({
  timeDuration,
}: {
  timeDuration: number;
}): {
  timeLeft: number;
  minutes: string;
  seconds: string;
  hour: string;
  refreshCountDown: () => void;
} => {
  const [timeLeft, setTimeLeft] = useState<number>(timeDuration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev: number) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeLeft]);

  const hour = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft / 60) % 60);
  const seconds = timeLeft % 60;

  return {
    timeLeft,
    minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
    seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
    hour: hour < 10 ? `0${hour}` : `${hour}`,
    refreshCountDown: () => setTimeLeft(timeDuration),
  };
};
