import React from 'react';
import { Box, Container, Paper, Text } from '@mantine/core';
import { PageProps } from 'gatsby';
import { useMediaQuery } from '@mantine/hooks';
import { BlogArticleListLayout } from '~/features/blog';

const BlogPage: React.FC<PageProps> = () => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');
  const tabScreen = useMediaQuery('(min-width: 30em) and (max-width: 60em)');

  return (
    <Box>
      <Paper
        mb="xl"
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: mobileScreen ? 'cover' : 'unset',
          backgroundImage: mobileScreen
            ? 'url(/img/events-banner-mobile.png)'
            : 'url(/img/events-banner.png)',
          backgroundPosition: mobileScreen ? 'right' : tabScreen ? '-1000px 0px' : '-500px 0px',
          height: '14rem',
          borderRadius: '0px',
        }}
      />
      <BlogArticleListLayout />
    </Box>
  );
};

export default BlogPage;
