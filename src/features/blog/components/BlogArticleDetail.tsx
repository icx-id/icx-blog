import React, { Children, FC, useEffect, useState } from 'react';
import { BlogArticleNode } from '../types';
import { Box, Container, Flex, Grid, MediaQuery, SimpleGrid, Text, rem } from '@mantine/core';
import { Markdown } from '~/components/core/Markdown';
import { useAllBlogArticlesQuery } from '../hooks';
import { BlogArticleListItem } from './BlogArticleListItem';
import { useMediaQuery } from '@mantine/hooks';
import { ShareButtonGroup } from './ShareButtonGroup';

interface BlogArticleDetailProps {
  article: BlogArticleNode;
}

export const BlogArticleDetail: FC<BlogArticleDetailProps> = ({ article }) => {
  const [shareUrl, setShareUrl] = useState('https://icx.id');
  const articles = useAllBlogArticlesQuery();

  const mobileScreen = useMediaQuery('(max-width: 30em)');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <Grid columns={12} gutter={0}>
        <Grid.Col
          lg={2}
          span={1}
          pos="relative"
          sx={{ display: 'flex', justifyContent: 'center' }}
          pb="xl">
          <MediaQuery styles={{ display: 'none' }} smallerThan="lg">
            <ShareButtonGroup
              pos="sticky"
              top={100}
              right={0}
              url={shareUrl}
              h="min-content"
              maw="118px"
            />
          </MediaQuery>
        </Grid.Col>
        <Grid.Col span={10} lg={8} pos="relative">
          <Box
            pt={mobileScreen ? 0 : '120px'}
            mt={mobileScreen ? rem(100) : '0'}
            mb={mobileScreen ? rem(40) : rem(100)}>
            <Flex align="center" direction="column" px={mobileScreen ? '0' : '20%'} mb="42px">
              <Text
                ta="center"
                sx={{ fontSize: mobileScreen ? rem(28) : rem(36), fontWeight: 'bold' }}>
                {article.frontmatter.title}
              </Text>
              <Text mt="lg" ta="center">
                {article.frontmatter.intro}
              </Text>
            </Flex>
            <Flex justify="center" mb={rem(52)}>
              <img
                src={article.frontmatter?.featuredImage?.src}
                alt={article.frontmatter?.featuredImage?.alt}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
              />
            </Flex>
            {!!article.tableOfContents && (
              <Box>
                <Text sx={{ fontSize: '18px', fontWeight: 500 }}>Table Of Contents:</Text>
                <Text
                  sx={{
                    '& ul': {
                      marginTop: '10px',
                    },
                    '& li': {
                      margin: '5px 0',
                      textDecoration: 'none',
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: article.tableOfContents }}
                />
              </Box>
            )}

            <Markdown content={article.rawMarkdownBody} />
            {!!article.frontmatter.tag && (
              <Flex gap={rem(10)}>
                {Children.toArray(
                  Object.values(article.frontmatter.tag).map((tag, index) => (
                    <Text sx={{ textDecoration: 'underline' }} key={index.toString()}>
                      {tag}
                    </Text>
                  )),
                )}
              </Flex>
            )}
          </Box>
          <MediaQuery styles={{ display: 'none' }} largerThan="md">
            <ShareButtonGroup url={shareUrl} orientation="horizontal" shadow="none" mb="xl" />
          </MediaQuery>
        </Grid.Col>
      </Grid>
      <Container size="ll">
        <Box px={mobileScreen ? 'xs' : 'xl'}>
          <Text sx={{ fontSize: rem(20), fontWeight: 600 }}>Read Another Blog</Text>
          <SimpleGrid
            my="lg"
            cols={4}
            breakpoints={[
              {
                cols: 3,
                maxWidth: 'md',
              },
              {
                cols: 1,
                maxWidth: 'sm',
              },
            ]}>
            {articles.slice(0, 4).map(
              ({
                frontmatter: {
                  featuredImage: { src },
                  intro,
                  title,
                },
                id,
                fields: { slug },
              }) => {
                return (
                  <BlogArticleListItem
                    image={src}
                    intro={intro}
                    slug={slug}
                    title={title}
                    key={id}
                  />
                );
              },
            )}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};
