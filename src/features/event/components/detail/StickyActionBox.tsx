import React, { FC } from 'react';
import { Box, Button, Group, Image, Stack, Text } from '@mantine/core';

import CopyIcon from '../../assets/ic-copy.svg';
import FacebookIcon from '../../assets/ic-facebook.svg';
import TwitterIcon from '../../assets/ic-twitter.svg';
import LinkedinIcon from '../../assets/ic-linkedin.svg';

const shareIcons = [CopyIcon, FacebookIcon, TwitterIcon, LinkedinIcon];

type StickyActionBoxProps = {
  onOpenModal: () => void;
};

export const StickyActionBox: FC<StickyActionBoxProps> = ({ onOpenModal }) => {
  return (
    <Stack
      w={{ base: 276, lg: 360 }}
      py={40}
      px={{ base: 16, lg: 24 }}
      spacing={0}
      align="center"
      pos="sticky"
      top={96}
      sx={{
        boxShadow: '0px 4px 64px rgba(0, 0, 0, 0.05)',
        borderRadius: 6,
      }}>
      <Text fz={18} fw={600} lh="24px">
        Registration
      </Text>
      <Button fullWidth mt={24} size="md" onClick={onOpenModal}>
        Daftar Event
      </Button>
      <Box mt={24}>
        <Text fz={14} fw={500} lh="20px" ta="center">
          Share this event
        </Text>
        <Group spacing={8} mt={8}>
          {shareIcons.map((icon, index) => (
            <Image key={index} src={icon} width={24} height={24} />
          ))}
        </Group>
      </Box>
    </Stack>
  );
};
