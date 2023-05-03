import React from 'react';
import {
  Input as MantineInput,
  createStyles,
  InputProps as MantineInputProps,
} from '@mantine/core';

interface InputProps extends MantineInputProps {
  name: string;
  value: string | number;
  onChange?: () => void;
  label?: string;
}

const useStyles = createStyles(theme => ({
  input: {
    borderBottom: '1px solid #CED4DA',
  },
}));

export const Input: React.FC<InputProps> = ({ label, error, value, onChange, name }) => {
  const { classes } = useStyles();
  return (
    <MantineInput.Wrapper label={label} error={error} w="100%">
      <MantineInput
        name={name}
        variant="unstyled"
        className={classes.input}
        value={value}
        onChange={onChange}
      />
    </MantineInput.Wrapper>
  );
};
