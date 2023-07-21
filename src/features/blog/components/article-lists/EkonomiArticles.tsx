import React from 'react';
import { useEkonomiBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const EkonomiArticles = () => {
  const articles = useEkonomiBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
