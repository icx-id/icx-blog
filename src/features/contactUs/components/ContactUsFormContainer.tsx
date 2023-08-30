import { Box, Button, Container, Flex, Text, Stack, createStyles, rem } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

const useStyles = createStyles(theme => ({
  root: {
    minHeight: '80vh',
    paddingTop: rem(120),
    paddingBottom: rem(50),
    backgroundColor: '#F4f4f4',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      backgroundColor: '#fff',
    },
  },
  content: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: '50px 25%',
    flexDirection: 'column',
    borderRadius: rem(8),
    justifyContent: 'center',
    [theme.fn.smallerThan('sm')]: {
      padding: 0,
    },
  },
}));

interface KycFormContainerProps {
  title: string;
  buttonDisabled?: boolean;
  withBackButton?: boolean;
  onSubmit: () => void;
  goBack?: () => void;
}

export const ContactUsFormContainer: React.FC<PropsWithChildren<KycFormContainerProps>> = ({
  title,
  children,
  goBack,
  onSubmit,
  buttonDisabled,
  withBackButton,
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container h="100%">
        <Flex className={classes.content}>
          <Text mt={rem(20)} weight="600" size={rem(20)} mb={rem(20)}>
            {title}
          </Text>
          <Stack>
            {children}
            <Flex justify="center" gap="xl">
              {withBackButton && (
                <Button onClick={goBack} mt={rem(30)} radius={rem(15)}>
                  Kembali
                </Button>
              )}
              <Button disabled={buttonDisabled} onClick={onSubmit} mt={rem(30)} radius={rem(15)}>
                Selanjutnya
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
