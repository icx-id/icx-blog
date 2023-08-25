import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CardItem } from './CardItem';
import { Wrapper } from '../Wrapper';

const titles = [
  'Preliminary & Intro Meeting',
  'Non-Disclosure Agreement',
  'Due Diligence',
  'Wiring Money to The Startups*',
  'Fundraising Process',
  'IC Approval',
];

export const HowToFundraiseSection = ({ ...props }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Wrapper
      gradientTitle
      bg="#fff"
      title="How to Fundraise Through ICX?"
      desc="We are dedicated to empower businesses"
      descLine2="contributing to Indonesia's economy by nurturing and fortifying.">
      <Flex justify="center" mt={mobileScreen ? '30px' : '54px'}>
        <Grid
          justify="center"
          gutter={mobileScreen ? 25 : tabScreen ? 35 : 50}
          maw={mobileScreen ? 'unset' : '80vw'}>
          {titles.map((title, idx) => (
            <Grid.Col span={mobileScreen ? 12 : tabScreen ? 6 : 4} key={title}>
              <CardItem title={title} number={idx + 1} />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Wrapper>
  );
};
