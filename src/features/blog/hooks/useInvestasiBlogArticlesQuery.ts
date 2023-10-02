import { graphql, useStaticQuery } from 'gatsby';
import { BlogArticlesQueryResponse } from '../types';

/**
 *
 * @deprecated
 */
export const useInvestasiBlogArticlesQuery = () => {
  const { allMarkdownRemark } = useStaticQuery<BlogArticlesQueryResponse>(
    graphql`
      query InvestasiBlogArticles {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              key: { eq: "blog-article" }
              draft: { eq: false }
              category: { eq: "investasi" }
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
