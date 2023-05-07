import { Stack, Text, rem } from '@mantine/core';
import React from 'react';
import { TataKelolaLayout } from './TataKelolaLayout';
import { Markdown } from '~/components/core/Markdown';
import { TataKelolaDataType } from '../types';

interface TataKelolaProps {
  data: TataKelolaDataType;
}

export const TataKelola: React.FC<TataKelolaProps> = ({ data }) => {
  return (
    <TataKelolaLayout>
      <Stack pb={64}>
        <Text weight={600} size={rem(32)}>
          {data.title}
        </Text>
        <Markdown content={data.content} />
      </Stack>
    </TataKelolaLayout>
  );
};
