import React from 'react';
import { useNewsBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const NewsArticles = () => {
  const articles = useNewsBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
