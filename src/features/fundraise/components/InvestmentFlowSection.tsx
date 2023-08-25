import { Flex, Image } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import InvestmentFlow from '../assets/investment-flow.png';
import { Wrapper } from './Wrapper';

export const InvestmentFlowSection = ({ ...props }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');

  return (
    <Wrapper
      gradientTitle
      bg="#EFEFED"
      title="Investment Flow"
      desc="Take the first step towards your fundraising goals."
      descLine2="Sign up now and start creating your fundraising campaign to attract investors and secure the funding your company deserves.">
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
