import { Flex, Image, MediaQuery, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { FC } from 'react';

export const CardItem: FC<{ title: string; desc: string; icon: string }> = ({
  title,
  desc,
  icon,
}) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 70em)');

  return (
    <Flex
      direction="column"
      justify={mobileScreen ? 'center' : 'start'}
      align={mobileScreen ? 'center' : 'start'}
      px={mobileScreen ? 0 : 24}
      py={mobileScreen ? 0 : 26}
      mx={mobileScreen || tabScreen ? 'unset' : 14}
      mb={mobileScreen ? 0 : 28}
      w={mobileScreen ? '100%' : tabScreen ? '50vw' : '23vw'}
      sx={{
        backgroundColor: mobileScreen ? 'unset' : '#252525',
        backgroundImage: mobileScreen ? 'unset' : `url(${icon})`,
        backgroundRepeat: mobileScreen ? 'unset' : 'no-repeat',
        backgroundPosition: mobileScreen ? 'unset' : 'calc(100% - 16px) calc(100% - 16px)',
        backgroundSize: '100px',
        borderRadius: '8px',
      }}>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Image src={icon} alt={icon} width={130} height={130} my={40} />
      </MediaQuery>
      <Text
        color="#fff"
        weight={600}
        size={mobileScreen ? 24 : 16}
        lh={1.3}
        align={mobileScreen ? 'center' : 'start'}>
        {title}
      </Text>
      <Text
        mt={10}
        color="#fff"
        weight={300}
        size={mobileScreen ? 16 : 12}
        align={mobileScreen ? 'center' : 'start'}>
        {desc}
      </Text>
    </Flex>
  );
};
