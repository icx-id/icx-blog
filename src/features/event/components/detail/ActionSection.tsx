import React, { FC } from 'react';
import { Box, Button, MediaQuery, Text } from '@mantine/core';

type ActionSectionProps = {
  onOpenDrawer: () => void;
};

export const ActionSection: FC<ActionSectionProps> = ({ onOpenDrawer }) => {
  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Box pt={24}>
        <Button fullWidth size="lg">
          <Text fz={14} fw={500} lh="20px" onClick={onOpenDrawer}>
            Daftar Event
          </Text>
        </Button>
      </Box>
    </MediaQuery>
  );
};
