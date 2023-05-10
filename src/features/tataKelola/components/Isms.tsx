import { Stack, Text, rem } from '@mantine/core';
import React from 'react';
import { TataKelolaLayout } from './TataKelolaLayout';
import { Markdown } from '~/components/core/Markdown';
import { TataKelolaDataType } from '../types';

interface IsmsProps {
  data: TataKelolaDataType;
}

export const Isms: React.FC<IsmsProps> = ({ data }) => {
  return (
    <TataKelolaLayout>
      <Stack>
        <Text weight={600} size={rem(32)}>
          {data.title}
        </Text>
        <Markdown content={data.content} />
      </Stack>
    </TataKelolaLayout>
  );
};
