import React, { FC, useMemo } from 'react';
import { Box, Button, Group, Image, Stack, Text } from '@mantine/core';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

import CopyIcon from '../../assets/ic-copy.svg';
import FacebookIcon from '../../assets/ic-facebook.svg';
import TwitterIcon from '../../assets/ic-twitter.svg';
import LinkedinIcon from '../../assets/ic-linkedin.svg';
import { notifications } from '@mantine/notifications';

type StickyActionBoxProps = {
  onOpenModal: () => void;
  disabled: boolean;
};

export const StickyActionBox: FC<StickyActionBoxProps> = ({ onOpenModal, disabled }) => {
  const currentUrl = useMemo(() => {
    if (typeof document !== 'undefined') {
      return document.URL;
    }
    return '';
  }, []);

  const copyClipboardLink = () => {
    navigator.clipboard.writeText(currentUrl);
    notifications.show({
      message: 'Link succesfully copied to clipboard.',
      color: 'green',
    });
  };

  const hoverIcon = { cursor: 'pointer', ':hover': { opacity: 0.7 } };

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
      {!disabled && (
        <Stack w="100%">
          <Text fz={18} fw={600} align="center">
            Registration
          </Text>
          <Button fullWidth size="md" onClick={onOpenModal}>
            Daftar Event
          </Button>
        </Stack>
      )}
      <Box mt={disabled ? 0 : 24}>
        <Text fz={14} fw={500} lh="20px" ta="center">
          Share this event
        </Text>
        <Group spacing={8} mt={10}>
          <Box onClick={copyClipboardLink}>
            <Image src={CopyIcon} width={24} height={24} sx={hoverIcon} />
          </Box>
          <FacebookShareButton url={currentUrl}>
            <Image src={FacebookIcon} width={24} height={24} sx={hoverIcon} />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <Image src={TwitterIcon} width={24} height={24} sx={hoverIcon} />
          </TwitterShareButton>
          <LinkedinShareButton url={currentUrl}>
            <Image src={LinkedinIcon} width={24} height={24} sx={hoverIcon} />
          </LinkedinShareButton>
        </Group>
      </Box>
    </Stack>
  );
};
