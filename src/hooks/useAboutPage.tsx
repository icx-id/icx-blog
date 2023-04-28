import { graphql, useStaticQuery } from "gatsby";

type AboutPageData = {
  title: string;
  subtitleLeft: string;
  subtitleRight: string;
  banner: string;
  ourStory: Array<{ year: number; description: string }>;
};

const useAboutPage = (): AboutPageData => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ABOUT_PAGE_QUERY {
        allMarkdownRemark(filter: { frontmatter: { key: { eq: "about" } } }) {
          nodes {
            frontmatter {
              title
              subtitleLeft
              subtitleRight
              banner
              ourStories {
                year
                description
              }
            }
          }
        }
      }
    `
  );
  const { nodes = [] } = allMarkdownRemark || {};
  const { frontmatter: data } = nodes[0];

  return data;
};

export default useAboutPage;
