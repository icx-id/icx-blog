import React from 'react';
import { useStartupBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const StartupArticles = () => {
  const articles = useStartupBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
