import React from 'react';
import { ActionIcon, Card, CardProps, Group, Stack, Text } from '@mantine/core';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import {
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandWhatsapp,
  IconCheck,
  IconLink,
} from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { generateUtmFromUrl } from '~/utils/generateUtmFromUrl';

interface CopyLinkButtonProps {
  valueToCopy: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({ valueToCopy }) => {
  const clipboard = useClipboard({ timeout: 1000 });

  const onClickCopyLink = () => {
    clipboard.copy(valueToCopy);
    notifications.show({
      message: 'Article link copied',
    });
  };

  return (
    <ActionIcon onClick={onClickCopyLink} bg="black" radius="xl" variant="filled" size="xl">
      {clipboard.copied ? <IconCheck /> : <IconLink style={{ color: 'white' }} />}
    </ActionIcon>
  );
};

interface ShareButtonGroupProps extends Omit<CardProps, 'children'> {
  url: string;
  orientation?: 'horizontal' | 'vertical';
}

export const ShareButtonGroup: React.FC<ShareButtonGroupProps> = ({
  url,
  orientation = 'vertical',
  ...cardProps
}) => {
  const shareButtonStyle = {
    backgroundColor: 'white',
    border: 0,
    width: 'min-content',
  };

  return (
    <Card shadow="xl" p="xl" px="md" radius="lg" {...cardProps}>
      <Text ta="center" mb="md">
        Share this article
      </Text>
      <Stack align="center" sx={{ flexDirection: orientation === 'horizontal' ? 'row' : 'column' }}>
        <TwitterShareButton
          url={generateUtmFromUrl(url, {
            campaign: 'lead',
            medium: 'social',
            source: 'twitter',
          })}
          resetButtonStyle={false}
          style={shareButtonStyle}>
          <ActionIcon bg="black" radius="xl" variant="filled" size="xl">
            <IconBrandTwitterFilled style={{ color: 'white' }} />
          </ActionIcon>
        </TwitterShareButton>
        <WhatsappShareButton
          url={generateUtmFromUrl(url, {
            campaign: 'lead',
            medium: 'social',
            source: 'whatsapp',
          })}
          resetButtonStyle={false}
          style={shareButtonStyle}>
          <ActionIcon bg="black" radius="xl" variant="filled" size="xl">
            <IconBrandWhatsapp style={{ color: 'white' }} />
          </ActionIcon>
        </WhatsappShareButton>
        <FacebookShareButton
          url={generateUtmFromUrl(url, {
            campaign: 'lead',
            medium: 'social',
            source: 'facebook',
          })}
          resetButtonStyle={false}
          style={shareButtonStyle}>
          <ActionIcon bg="black" radius="xl" variant="filled" size="xl">
            <IconBrandFacebookFilled style={{ color: 'white' }} />
          </ActionIcon>
        </FacebookShareButton>
        <CopyLinkButton
          valueToCopy={generateUtmFromUrl(url, {
            campaign: 'lead',
            medium: 'social',
            source: 'copy_link',
          })}
        />
      </Stack>
    </Card>
  );
};
