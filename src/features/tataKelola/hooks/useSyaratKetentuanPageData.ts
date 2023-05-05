import { graphql, useStaticQuery } from 'gatsby';

export const useSyaratKetentuanPageData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SYARAT_KETENTUAN_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "syarat-dan-ketentuan" } } }) {
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

export default useSyaratKetentuanPageData;
