import React, { useState } from 'react';
import { CardItem } from './CardItem';
import Icon1 from '../../assets/why-fundraise-1.svg';
import Icon2 from '../../assets/why-fundraise-2.svg';
import Icon3 from '../../assets/why-fundraise-3.svg';
import Icon4 from '../../assets/why-fundraise-4.svg';
import Icon5 from '../../assets/why-fundraise-5.svg';
import { Wrapper } from '../Wrapper';
import { Box, Flex, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LineNavigator } from '~/components/LineNavigator';

const data = [
  {
    icon: Icon1,
    title: 'Direct Network to Angel Investors',
    desc: 'Connecting business owners with Angel Investors, helping businesses to have new funding access, raised by spreading equity through crowdfunding platforms. Access to a larger pool of high-net worth individuals, expanding the reach and visibility of the fundraising campaign.',
  },
  {
    icon: Icon2,
    title: 'OJK, KSEI, and ISO 27001 Licensed Platform',
    desc: 'Every investments on ICX are being recorded at KSEI, licensed and supervised by OJK, and our security system has been certified by ISO 27001.',
  },
  {
    icon: Icon3,
    title: 'Bridging to IPO',
    desc: 'Enhance the valuation of business planning to undertake Initial Public Offerings (IPOs) in the future. ICX can help startups and businesses to grow and bridge them to IPO with the help of our partner Sucor Sekuritas.',
  },
  {
    icon: Icon4,
    title: 'Talent Pool Access',
    desc: 'Tap into a diverse and skilled digital workforce proficient in cutting-edge technologies. ICX will give talent support to startups and businesses by working with our partner Purwadhika.',
  },
  {
    icon: Icon5,
    title: 'Collaboration With ICX Ecosystem',
    desc: 'Being part of an established crowdfunding ecosystem brings credibility and trust, as ICX often have stringent due diligence processes in place.ICX works with with a couple of medias such as Finfolk & Teman Startup to help businesses andstartups coexist in a ecosystem where they can grow even more.',
  },
];

export const WhyFundraiseSection = ({ ...props }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  const [active, setActive] = useState(0);

  const onClickPrev = () => {
    if (active > 0) {
      setActive(prev => prev - 1);
    }
  };

  const onClickNext = () => {
    if (active < data.length - 1) {
      setActive(prev => prev + 1);
    }
  };

  return (
    <Wrapper title="Why Fundraise Through ICX?" bg={mobileScreen ? '#252525' : '#000'}>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Flex direction="column" align="center" mt="40px">
          <Flex direction={tabScreen ? 'column' : 'row'}>
            <CardItem
              icon={Icon1}
              title="Direct Network to Angel Investors"
              desc="Connecting business owners with Angel Investors, helping businesses to have new funding access, raised by spreading equity through crowdfunding platforms. Access to a larger pool of high-net worth individuals, expanding the reach and visibility of the fundraising campaign."
            />
            <CardItem
              icon={Icon2}
              title="OJK, KSEI, and ISO 27001 Licensed Platform"
              desc="Every investments on ICX are being recorded at KSEI, licensed and supervised by OJK, and our security system has been certified by ISO 27001."
            />
            <CardItem
              icon={Icon3}
              title="Bridging to IPO"
              desc="Enhance the valuation of business planning to undertake Initial Public Offerings (IPOs) in the future. ICX can help startups and businesses to grow and bridge them to IPO with the help of our partner Sucor Sekuritas."
            />
          </Flex>
          <Flex direction={tabScreen ? 'column' : 'row'}>
            <CardItem
              icon={Icon4}
              title="Talent Pool Access"
              desc="Tap into a diverse and skilled digital workforce proficient in cutting-edge technologies. ICX will give talent support to startups and businesses by working with our partner Purwadhika."
            />
            <CardItem
              icon={Icon5}
              title="Collaboration With ICX Ecosystem"
              desc="Being part of an established crowdfunding ecosystem brings credibility and trust, as ICX often have stringent due diligence processes in place.ICX works with with a couple of medias such as Finfolk & Teman Startup to help businesses andstartups coexist in a ecosystem where they can grow even more."
            />
          </Flex>
        </Flex>
      </MediaQuery>

      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Box>
          <Box mih={500}>
            <CardItem
              icon={data[active].icon}
              title={data[active].title}
              desc={data[active].desc}
            />
          </Box>
          <Flex justify="center">
            <LineNavigator
              darkMode
              big
              data={data}
              active={active}
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
            />
          </Flex>
        </Box>
      </MediaQuery>
    </Wrapper>
  );
};
