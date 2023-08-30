import React, { FC, useState } from 'react';
import { CardItem } from './CardItem';
import { Wrapper } from '../Wrapper';
import { Box, Flex, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LineNavigator } from '~/components/LineNavigator';
import { WhyFundraiseSectionProps } from '../../types';

export const WhyFundraiseSection: FC<WhyFundraiseSectionProps> = ({ title, data }) => {
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
    <Wrapper title={title} bg={mobileScreen ? '#252525' : '#000'}>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Flex direction="column" align="center" mt="40px">
          <Flex direction={tabScreen ? 'column' : 'row'}>
            {data?.slice(0, 3).map(item => (
              <CardItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </Flex>
          <Flex direction={tabScreen ? 'column' : 'row'}>
            {data?.slice(3).map(item => (
              <CardItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
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
