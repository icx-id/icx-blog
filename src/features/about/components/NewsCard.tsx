import { Box, Stack, Text } from '@mantine/core';
import { format } from 'date-fns';
import React from 'react';
import { Link } from '~/components';
import axiosLogo from '~/images/axios.png';
import { IoArrowForward } from 'react-icons/io5';

interface NewsCardProps {
  image: string;
  title: string;
  publishDate: Date;
  description: string;
  newsURL: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  description,
  image,
  newsURL,
  publishDate,
  title,
}) => {
  return (
    <Stack
      mih="491px"
      justify="space-between"
      sx={{
        flex: 1,
        border: '1.5px solid #E0E5E6',
        borderRadius: '10px',
        padding: '2.5em 1.75em',
      }}>
      <Stack spacing="1em">
        <Box>
          <img src={image || axiosLogo} style={{ objectFit: 'contain', height: '2em' }} />
        </Box>

        <Text fw="bold" fz="1.5em">
          {title}
        </Text>
        <Text color="#6A787A" fz="0.75em">
          {format(publishDate || new Date(), 'd/M/yyyy')}
        </Text>
        <Text fz="14px" lineClamp={4}>
          {description}
        </Text>
      </Stack>
      <Link to={newsURL} display="flex" sx={{ alignItems: 'center' }}>
        Read Story <IoArrowForward size="1.25em" style={{ marginLeft: '0.5em' }} />
      </Link>
    </Stack>
  );
};
