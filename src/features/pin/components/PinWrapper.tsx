import {
  Box,
  Container,
  createStyles,
  rem,
  PinInput,
  Flex,
  Text,
  Center,
  Loader,
} from '@mantine/core';
import React from 'react';

const useStyles = createStyles(theme => ({
  root: {
    height: rem(600),
    paddingTop: rem(120),
    paddingBottom: rem(50),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(100),
      paddingBottom: rem(30),
      height: rem(500),
    },
  },
}));

interface PinWrapperProps {
  title: string;
  description: string;
  isError: boolean;
  otpValue: string;
  onChange: (value: string) => void;
  onComplete: () => void;
  loading?: boolean;
}

export const PinWrapper: React.FC<PinWrapperProps> = ({
  title,
  description,
  otpValue,
  isError,
  onChange,
  onComplete,
  loading,
}) => {
  const { classes } = useStyles();

  return (
    <Box bg="#F8F8F8" className={classes.root}>
      <Container size="ll" h="100%">
        <Center h="100%">
          <Flex
            direction="column"
            align="center"
            w="70%"
            h="100%"
            sx={theme => ({
              backgroundColor: '#FFF',
              padding: '50px',
              justifyContent: 'center',
              borderRadius: rem(8),
              [theme.fn.smallerThan('sm')]: {
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#F8F8F8',
              },
            })}>
            <Flex
              sx={theme => ({
                padding: '0 140px',
                alignItems: 'center',
                [theme.fn.smallerThan('sm')]: {
                  padding: 0,
                },
              })}
              direction="column"
              gap={rem(5)}>
              <Text size={rem(26)} weight="600">
                {title}
              </Text>
              <Text
                align="center"
                sx={theme => ({
                  fontSize: rem(16),
                  [theme.fn.smallerThan('sm')]: {
                    fontSize: rem(14),
                  },
                })}>
                {description}
              </Text>
            </Flex>
            {loading ? (
              <Loader color="green" variant="dots" mt={rem(26)} />
            ) : (
              <PinInput
                onChange={onChange}
                onComplete={onComplete}
                autoFocus
                size="lg"
                mt={rem(26)}
                length={6}
                type="number"
                error={isError}
                value={otpValue}
              />
            )}
          </Flex>
        </Center>
      </Container>
    </Box>
  );
};
