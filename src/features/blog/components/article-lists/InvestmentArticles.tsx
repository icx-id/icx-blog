import React from 'react';
import { useInvestmentBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const InvestmentArticles = () => {
  const articles = useInvestmentBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
