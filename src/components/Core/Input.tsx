import React from 'react';
import {
  Input as MantineInput,
  createStyles,
  TextInputProps as MantineTextInputProps,
  PasswordInput,
} from '@mantine/core';
import { IMaskInput } from 'react-imask';

interface InputProps extends MantineTextInputProps {
  name: string;
  value: string | number;
  label?: string;
}

interface MaskInputProps extends InputProps {
  onAccept: (value: string, mask: string) => void;
  mask: string;
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
  description,
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
      <MantineInput.Description mt={4}>{description}</MantineInput.Description>
    </MantineInput.Wrapper>
  );
};

export const MaskInput: React.FC<MaskInputProps> = ({
  name,
  label,
  error,
  value,
  onAccept,
  mask,
  description,
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
      <MantineInput<any>
        component={IMaskInput}
        mask={mask}
        name={name}
        variant="unstyled"
        className={classes.input}
        value={value}
        onAccept={onAccept}
        styles={{
          input: {
            padding: 0,
          },
        }}
        {...textInputProps}
      />
      <MantineInput.Description mt={4}>{description}</MantineInput.Description>
    </MantineInput.Wrapper>
  );
};
