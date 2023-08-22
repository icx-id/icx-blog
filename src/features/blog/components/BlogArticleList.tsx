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
            isPinned,
          },
          id,
          fields: { slug },
        }) => {
          if (isPinned)
            return (
              <BlogArticleListItem
                pinned={isPinned}
                image={src}
                intro={intro}
                slug={slug}
                title={title}
                key={id}
              />
            );
        },
      )}
      {articles.map(
        ({
          frontmatter: {
            featuredImage: { src },
            intro,
            title,
            isPinned,
          },
          id,
          fields: { slug },
        }) => {
          if (!isPinned)
            return (
              <BlogArticleListItem image={src} intro={intro} slug={slug} title={title} key={id} />
            );
        },
      )}
    </>
  );
};
