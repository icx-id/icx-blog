import { ActionIcon, Flex, Image, Text, rem } from '@mantine/core';
import React from 'react';

export interface FundraiseBreadcrumbsProps {
  currentStep?: string;
  totalStep?: string;
  goBack?: () => void;
}

export const FundraiseBreadcrumbs: React.FC<FundraiseBreadcrumbsProps> = ({
  currentStep,
  totalStep,
  goBack,
}) => {
  return (
    <Flex align="center">
      {currentStep !== '1' && (
        <ActionIcon onClick={goBack}>
          <Image src="/img/icons/ic-arrow-left.svg" fit="contain" width={rem(20)} />
        </ActionIcon>
      )}
      <Text size={rem(14)} ml={rem(5)} color="#00C48F">
        Langkah {currentStep}
      </Text>
      <Text size={rem(14)} ml={rem(5)}>
        dari {totalStep}
      </Text>
    </Flex>
  );
};
