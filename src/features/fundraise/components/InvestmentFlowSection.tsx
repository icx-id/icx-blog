import { Flex, Image } from '@mantine/core';
import React, { FC } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import InvestmentFlow from '../assets/investment-flow.webp';
import { Wrapper } from './Wrapper';
import { InvestmentFlowSectionProps } from '../types';

export const InvestmentFlowSection: FC<InvestmentFlowSectionProps> = ({
  title,
  desc,
  descLine2,
}) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const giantScreen = useMediaQuery('(min-width: 160em)');

  return (
    <Wrapper gradientTitle bg="#EFEFED" title={title} desc={desc} descLine2={descLine2}>
      <Flex justify="center">
        <Image
          src={InvestmentFlow}
          width={mobileScreen ? '100%' : giantScreen ? '600px' : '450px'}
          my={mobileScreen ? '20px' : giantScreen ? '60px' : '40px'}
        />
      </Flex>
    </Wrapper>
  );
};
