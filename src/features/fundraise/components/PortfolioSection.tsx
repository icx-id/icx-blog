import { Box, Flex, Image } from '@mantine/core';
import React, { FC } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import PortfolioMobile from '../assets/portfolio-mobile.webp';
import PortfolioDesktop from '../assets/portfolio-desktop.webp';
import { Wrapper } from './Wrapper';
import { PortfolioSectionProps } from '../types';

export const PortfolioSection: FC<PortfolioSectionProps> = ({ title, desc, descLine2 }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Wrapper
      gradientTitle
      bg="#fff"
      pb={mobileScreen ? 0 : 100}
      title={title}
      desc={desc}
      descLine2={descLine2}>
      <Flex justify="center" w="100%">
        <Box w={mobileScreen ? '60%' : tabScreen ? '70%' : '55%'}>
          <Image
            src={mobileScreen ? PortfolioMobile : PortfolioDesktop}
            w="100%"
            mt={mobileScreen ? '20px' : tabScreen ? '30px' : '40px'}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};
