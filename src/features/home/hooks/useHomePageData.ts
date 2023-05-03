import { graphql, useStaticQuery } from 'gatsby';
import { HomeDataType } from '../types';

export const useHomePageData = (): HomeDataType => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query HOME_PAGE_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "home" } } }) {
          nodes {
            frontmatter {
              title
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

export default useHomePageData;
