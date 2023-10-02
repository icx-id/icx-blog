import { graphql, useStaticQuery } from 'gatsby';
import { BlogArticlesQueryResponse } from '../types';

export const useInvestmentBlogArticlesQuery = () => {
  const { allMarkdownRemark } = useStaticQuery<BlogArticlesQueryResponse>(
    graphql`
      query InvestmentBlogArticles {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              key: { eq: "blog-article" }
              draft: { eq: false }
              category: { eq: "investment" }
            }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              rawMarkdownBody
              frontmatter {
                author
                key
                draft
                title
                metaTitle
                metaDescription
                intro
                date
                featuredImage {
                  alt
                  src
                  title
                }
                category
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  const extractedNodes = allMarkdownRemark.edges.map(edge => edge.node);

  return extractedNodes || [];
};
