import React, { Children, FC } from 'react';
import { BlogArticleNode } from '../types';
import { Box, Container, Flex, SimpleGrid, Text, rem } from '@mantine/core';
import { Markdown } from '~/components/core/Markdown';
import { useAllBlogArticlesQuery } from '../hooks';
import { BlogArticleListItem } from './BlogArticleListItem';
import { useMediaQuery } from '@mantine/hooks';

interface BlogArticleDetailProps {
  article: BlogArticleNode;
}

export const BlogArticleDetail: FC<BlogArticleDetailProps> = ({ article }) => {
  const articles = useAllBlogArticlesQuery();

  const mobileScreen = useMediaQuery('(max-width: 30em)');

  return (
    <Container sx={{ minHeight: '100vh', padding: '120px' }} size="ll">
      <Box
        px={mobileScreen ? '0' : '13%'}
        mt={mobileScreen ? rem(100) : '0'}
        mb={mobileScreen ? rem(40) : rem(100)}>
        <Flex align="center" direction="column" px={mobileScreen ? '0' : '20%'} mb="42px">
          <Text ta="center" sx={{ fontSize: mobileScreen ? rem(28) : rem(36), fontWeight: 'bold' }}>
            {article.frontmatter.title}
          </Text>
          <Text mt="lg" ta="center">
            {article.frontmatter.intro}
          </Text>
        </Flex>
        <Flex justify="center" mb={rem(52)}>
          <img
            src={article.frontmatter.featuredImage.src}
            alt={article.frontmatter.featuredImage.alt}
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
        <Flex gap={rem(10)}>
          {Children.toArray(
            Object.values(article.frontmatter.tag).map((tag, index) => (
              <Text sx={{ textDecoration: 'underline' }} key={index.toString()}>
                {tag}
              </Text>
            )),
          )}
        </Flex>
      </Box>
      <Box>
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
                <BlogArticleListItem image={src} intro={intro} slug={slug} title={title} key={id} />
              );
            },
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
};
