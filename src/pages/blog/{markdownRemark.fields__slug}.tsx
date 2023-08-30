/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { PageProps, graphql, HeadFC } from 'gatsby';
import { SiteMetadata } from '~/components';
import { BlogArticleDetail, BlogArticleQueryResponse } from '~/features/blog/';

export const query = graphql`
  query ($slug: String) {
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
      <BlogArticleDetail article={data.markdownRemark} />;
    </>
  );
};

export const Head: HeadFC<BlogArticleQueryResponse> = ({ data, location }) => {
  return (
    <SiteMetadata
      title={data.markdownRemark.frontmatter.metaTitle}
      metaDescription={data.markdownRemark.frontmatter.metaDescription}
      ogImageUrl={data?.markdownRemark?.frontmatter?.featuredImage?.src}
      pathname={location.pathname}
    />
  );
};

export default BlogDetailPage;
