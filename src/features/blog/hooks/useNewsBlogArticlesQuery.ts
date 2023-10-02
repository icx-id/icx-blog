import { graphql, useStaticQuery } from 'gatsby';
import { BlogArticlesQueryResponse } from '../types';

export const useNewsBlogArticlesQuery = () => {
  const { allMarkdownRemark } = useStaticQuery<BlogArticlesQueryResponse>(
    graphql`
      query NewsBlogArticles {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              key: { eq: "blog-article" }
              draft: { eq: false }
              category: { eq: "news" }
            }
          }
          sort: { frontmatter: { date: DESC } }
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
