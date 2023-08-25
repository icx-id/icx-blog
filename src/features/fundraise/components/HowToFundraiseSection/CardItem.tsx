import { Text, Flex } from '@mantine/core';
import React, { FC } from 'react';
import GradientBackground from '../../assets/gradient-card.png';

export const CardItem: FC<{ title: string; number: number }> = ({ title, number }) => {
  return (
    <Flex
      dir="row"
      align="center"
      sx={{
        backgroundColor: 'green',
        borderRadius: '8px',
        backgroundImage: `url(${GradientBackground})`,
        backgroundRepeat: 'no-repeat',
      }}
      px={20}>
      <Text color="#19303E" weight={600} size={64}>
        {number}
      </Text>
      <Text color="#fff" weight={600} size={16} ml={16}>
        {title}
      </Text>
    </Flex>
  );
};
