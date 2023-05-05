import { graphql, useStaticQuery } from 'gatsby';

export const useMitigasiRisikoPageData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MITIGASI_RISIKO_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "mitigasi-risiko" } } }) {
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

export default useMitigasiRisikoPageData;
