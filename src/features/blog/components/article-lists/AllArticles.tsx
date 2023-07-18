import React from 'react';
import { useAllBlogArticlesQuery } from '../../hooks';
import { BlogArticleList } from '../BlogArticleList';

export const AllArticles = () => {
  const articles = useAllBlogArticlesQuery();

  return <BlogArticleList articles={articles} />;
};
