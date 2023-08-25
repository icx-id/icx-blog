import { Box, Flex, Image } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import PortfolioMobile from '../assets/portfolio-mobile.png';
import PortfolioDesktop from '../assets/portfolio-desktop.png';
import { Wrapper } from './Wrapper';

export const PortfolioSection = ({ ...props }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Wrapper
      gradientTitle
      bg="#fff"
      pb={mobileScreen ? 0 : 100}
      title="Our Portofolio"
      desc="We are dedicated to empower businesses"
      descLine2="contributing to Indonesia's economy by nurturing and fortifying.">
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
