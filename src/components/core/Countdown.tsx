import { Text, createStyles } from '@mantine/core';
import Countdown from 'react-countdown';
import React from 'react';

const useStyles = createStyles(() => ({
  countdown: {
    color: '#00A478',
    fontWeight: 600,
  },
}));

interface CustomCountdownProps {
  keyCountDown: number | string;
  onRefreshCountdown: () => void;
  timeLeft: number;
}

export const CustomCountdown: React.FC<CustomCountdownProps> = ({
  keyCountDown,
  onRefreshCountdown,
  timeLeft,
}) => {
  const { classes } = useStyles();

  const renderCountdown = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return (
        <Text sx={{ cursor: 'pointer' }} onClick={onRefreshCountdown} color="#00A478" weight="600">
          Kirim ulang
        </Text>
      );
    }
    return (
      <Text className={classes.countdown}>
        0{minutes} : {seconds}
      </Text>
    );
  };
  return (
    <Countdown
      className={classes.countdown}
      autoStart
      key={keyCountDown}
      zeroPadTime={3}
      renderer={renderCountdown}
      date={Date.now() + timeLeft}
    />
  );
};
