import React, { FC } from 'react';
import { Flex, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CardItem } from './CardItem';
import { Wrapper } from '../Wrapper';
import { HowToFundraiseSectionProps } from '../../types';

const steps = [
  'Preliminary & Intro Meeting',
  'Non-Disclosure Agreement',
  'Due Diligence',
  'Wiring Money to The Startups*',
  'Fundraising Process',
  'IC Approval',
];

export const HowToFundraiseSection: FC<HowToFundraiseSectionProps> = ({
  title,
  desc,
  descLine2,
}) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Wrapper gradientTitle bg="#fff" title={title} desc={desc} descLine2={descLine2}>
      <Flex justify="center" mt={mobileScreen ? '30px' : '54px'}>
        <Grid
          justify="center"
          gutter={mobileScreen ? 25 : tabScreen ? 35 : 50}
          maw={mobileScreen ? 'unset' : '80vw'}>
          {steps.map((step, idx) => (
            <Grid.Col span={mobileScreen ? 12 : tabScreen ? 6 : 4} key={step}>
              <CardItem title={step} number={idx + 1} />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Wrapper>
  );
};
