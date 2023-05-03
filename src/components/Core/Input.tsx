import React from 'react';
import {
  Input as MantineInput,
  createStyles,
  TextInputProps as MantineInputProps,
  PasswordInput,
} from '@mantine/core';

interface InputProps extends MantineInputProps {
  name: string;
  value: string | number;
  label?: string;
}

const useStyles = createStyles(theme => ({
  input: {
    borderBottom: '1px solid #CED4DA',
  },
}));

export const Input: React.FC<InputProps> = ({
  label,
  error,
  value,
  onChange,
  name,
  type,
  ...textInputProps
}) => {
  const { classes } = useStyles();
  return (
    <MantineInput.Wrapper
      label={label}
      error={error}
      w="100%"
      styles={{
        label: {
          fontWeight: 'bold',
        },
      }}>
      {type === 'password' ? (
        <PasswordInput
          name={name}
          variant="unstyled"
          className={classes.input}
          value={value}
          onChange={onChange}
          styles={{
            innerInput: {
              padding: 0,
            },
          }}
          {...textInputProps}
        />
      ) : (
        <MantineInput
          name={name}
          variant="unstyled"
          className={classes.input}
          value={value}
          onChange={onChange}
          styles={{
            input: {
              padding: 0,
            },
          }}
          {...textInputProps}
        />
      )}
    </MantineInput.Wrapper>
  );
};
