import React from 'react';
import { DefaultMantineColor, Text, TextProps } from '@mantine/core';

interface InlineBadgeProps extends TextProps {
  backgroundColor?: DefaultMantineColor;
  children: React.ReactNode;
  fontWeight?: string;
  handleClick?: () => void;
}

export const InlineBadge: React.FC<InlineBadgeProps> = ({
  children,
  backgroundColor = '#E9ECEF',
  fontWeight = 'bold',
  handleClick,
  ...props
}) => {
  return (
    <Text
      onClick={handleClick}
      weight={fontWeight}
      span
      sx={{ padding: '6.5px 12px', backgroundColor, borderRadius: '2em' }}
      {...props}>
      {children}
    </Text>
  );
};
