import { Box, Button, Container, Flex, Stack, Text, createStyles, rem } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { FundraiseBreadcrumbsProps, FundraiseBreadcrumbs } from './FundraiseBreadcrumbs';

const useStyles = createStyles(theme => ({
  root: {
    minHeight: '80vh',
    paddingTop: rem(120),
    paddingBottom: rem(50),
    backgroundColor: '#FFFFFF',
    [theme.fn.smallerThan('md')]: {
      paddingTop: rem(80),
      minHeight: '60vh',
    },
  },
  content: {
    width: '100%',
    padding: '50px 25%',
    flexDirection: 'column',
    borderRadius: rem(8),
    justifyContent: 'center',
    [theme.fn.smallerThan('md')]: {
      padding: '50px 15%',
    },
    [theme.fn.smallerThan('sm')]: {
      padding: 0,
    },
  },
}));

interface FormContainerProps extends FundraiseBreadcrumbsProps {
  title: string;
  onSubmit: () => void;
  withBreadcrumbs?: boolean;
  buttonDisabled?: boolean;
}

export const FormContainer: React.FC<PropsWithChildren<FormContainerProps>> = ({
  title,
  currentStep,
  totalStep,
  children,
  goBack,
  onSubmit,
  withBreadcrumbs,
  buttonDisabled,
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container h="100%">
        <Flex className={classes.content}>
          {withBreadcrumbs && (
            <FundraiseBreadcrumbs currentStep={currentStep} totalStep={totalStep} goBack={goBack} />
          )}

          <Text mt={rem(20)} weight="600" size={rem(20)} mb={rem(20)}>
            {title}
          </Text>
          <Stack>
            {children}
            <Button disabled={buttonDisabled} onClick={onSubmit} mt={rem(30)} radius={rem(15)}>
              Selanjutnya
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
