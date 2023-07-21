import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { SiteMetadata } from '~/components';
import { BlogArticleDetail, BlogArticleQueryResponse } from '~/features/blog/';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tag
        featuredImage {
          alt
          src
          title
        }
        intro
        metaTitle
        metaDescription
      }
      tableOfContents
      rawMarkdownBody
      html
    }
  }
`;

const BlogDetailPage: FC<PageProps<BlogArticleQueryResponse>> = ({ data }) => {
  return (
    <>
      <SiteMetadata
        title={data.markdownRemark.frontmatter.metaTitle}
        metaDescription={data.markdownRemark.frontmatter.metaDescription}
      />
      <BlogArticleDetail article={data.markdownRemark} />;
    </>
  );
};

export default BlogDetailPage;
