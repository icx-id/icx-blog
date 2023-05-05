import { graphql, useStaticQuery } from 'gatsby';

export const useIsmsPageData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ISMS_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "isms" } } }) {
          nodes {
            frontmatter {
              title
              content
            }
          }
        }
      }
    `,
  );

  const { nodes = [] } = allMarkdownRemark || {};
  const { frontmatter: data = {} } = nodes[0] || {};

  return data;
};

export default useIsmsPageData;
