import React from 'react';
import { useInvestasiBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const InvestasiArticles = () => {
  const articles = useInvestasiBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
