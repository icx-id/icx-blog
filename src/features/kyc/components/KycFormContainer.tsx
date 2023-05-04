import { Box, Button, Container, Flex, Stack, Text, rem } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { KycBreadcrumbs, KycBreadcrumbsProps } from './KycBreadcrumbs';

interface KycFormContainerProps extends KycBreadcrumbsProps {
  title: string;
  onSubmit: () => void;
  withBreadcrumbs?: boolean;
}

export const KycFormContainer: React.FC<PropsWithChildren<KycFormContainerProps>> = ({
  title,
  currentStep,
  totalStep,
  children,
  goBack,
  onSubmit,
  withBreadcrumbs,
}) => {
  return (
    <Box bg="#EEFFF2" mih="80vh" py={rem(50)}>
      <Container h="100%">
        <Flex
          bg="#FFF"
          w="100%"
          px="25%"
          h="100%"
          py={rem(50)}
          style={{ borderRadius: rem(8) }}
          direction="column"
          justify="center">
          {withBreadcrumbs && (
            <KycBreadcrumbs currentStep={currentStep} totalStep={totalStep} goBack={goBack} />
          )}

          <Text mt={rem(20)} weight="600" size={rem(20)} mb={rem(20)}>
            {title}
          </Text>
          <Stack>
            {children}
            <Button
              style={{ backgroundColor: '#00C48F' }}
              onClick={onSubmit}
              mt={rem(10)}
              radius={rem(15)}>
              Selanjutnya
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
