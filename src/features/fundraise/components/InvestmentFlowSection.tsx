import { Flex, Image } from '@mantine/core';
import React, { FC } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import InvestmentFlow from '../assets/investment-flow.png';
import { Wrapper } from './Wrapper';
import { InvestmentFlowSectionProps } from '../types';

export const InvestmentFlowSection: FC<InvestmentFlowSectionProps> = ({
  title,
  desc,
  descLine2,
}) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');

  return (
    <Wrapper gradientTitle bg="#EFEFED" title={title} desc={desc} descLine2={descLine2}>
      <Flex justify="center">
        <Image
          src={InvestmentFlow}
          width={mobileScreen ? '100%' : '450px'}
          my={mobileScreen ? '20px' : '40px'}
        />
      </Flex>
    </Wrapper>
  );
};
