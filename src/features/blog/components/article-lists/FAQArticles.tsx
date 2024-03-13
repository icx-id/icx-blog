import React from 'react';
import { BlogArticleList } from '../BlogArticleList';
import { useFAQBlogArticlesQuery } from '../../hooks';

export const FAQArticles = () => {
  const articles = useFAQBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
