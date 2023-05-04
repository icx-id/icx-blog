import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from '@mantine/core';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps extends TextProps {
  to: string;
}

export const Link: React.FC<LinkProps & PropsWithChildren> = ({ to, children, ...props }) => {
  return (
    <Text weight="600" component={GatsbyLink} color="brand" to={to} w="fit-content" {...props}>
      {children}
    </Text>
  );
};
