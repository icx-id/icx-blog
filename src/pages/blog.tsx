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
          backgroundImage: 'url(/img/events-banner.png)',
          backgroundPosition: mobileScreen
            ? '-1200px 0px'
            : tabScreen
            ? '-1000px 0px'
            : '-500px 0px',
          height: '20rem',
          borderRadius: '0px',
        }}>
        <Container sx={{ height: '100%' }} size="ll">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              paddingTop: '50px',
            }}>
            <Text color="#FFF" fz={mobileScreen ? 26 : 30} fw="bolder">
              ICX Blog
            </Text>
          </Box>
        </Container>
      </Paper>

      <BlogArticleListLayout />
    </Box>
  );
};

export default BlogPage;
