import { graphql, useStaticQuery } from 'gatsby';
// import { AboutDataType } from '../types';

export const useAboutPageData = (): null => {
  // const { allMarkdownRemark } = useStaticQuery(
  //   graphql`
  //     query ABOUT_PAGE_QUERY {
  //       allMarkdownRemark(filter: { frontmatter: { key: { eq: "about" } } }) {
  //         nodes {
  //           frontmatter {
  //             title
  //             subtitleLeft
  //             subtitleRight
  //             banner
  //             ourStories {
  //               year
  //               description
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // );

  // const { nodes = [] } = allMarkdownRemark || {};
  // const { frontmatter: data = {} } = nodes[0] || {};

  // return data;
  return null;
};

export default useAboutPageData;
