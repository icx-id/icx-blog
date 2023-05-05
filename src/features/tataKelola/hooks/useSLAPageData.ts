import { graphql, useStaticQuery } from 'gatsby';

export const useSLAPageData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SLA_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "sla" } } }) {
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

export default useSLAPageData;
