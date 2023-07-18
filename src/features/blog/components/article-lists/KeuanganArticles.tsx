import React from 'react';
import { useKeuanganBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const KeuanganArticles = () => {
  const articles = useKeuanganBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
