import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from '@mantine/core';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps extends TextProps {
  to: string;
  color?: string;
}

export const Link: React.FC<LinkProps & PropsWithChildren> = ({
  to,
  children,
  color = 'brand',
  ...props
}) => {
  return (
    <Text
      weight="600"
      sx={{ cursor: 'pointer' }}
      component={GatsbyLink}
      color={color}
      to={to}
      w="fit-content"
      {...props}>
      {children}
    </Text>
  );
};
