import React from 'react';
import { Select as MantineSelect, SelectProps as MantineSelectProps } from '@mantine/core';

interface SelectProps extends MantineSelectProps {}

export const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <MantineSelect
      {...props}
      variant="unstyled"
      sx={{ borderBottom: '1px solid #CED4DA' }}
      styles={{ label: { fontWeight: 'bold' } }}
    />
  );
};
