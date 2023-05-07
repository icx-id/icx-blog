import { graphql, useStaticQuery } from 'gatsby';

export const useKebijakanPrivasiPageData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query KEBIJAKAN_PRIVASI_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "kebijakan-privasi" } } }) {
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

export default useKebijakanPrivasiPageData;
