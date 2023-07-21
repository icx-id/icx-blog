import { BlogArticleNode } from '../types';
import React from 'react';
import { BlogArticleListItem } from './BlogArticleListItem';

interface BlogArticleListProps {
  articles: BlogArticleNode[];
}

export const BlogArticleList: React.FC<BlogArticleListProps> = ({ articles }) => {
  return (
    <>
      {articles.map(
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
    </>
  );
};
