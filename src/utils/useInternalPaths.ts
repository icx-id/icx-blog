import { graphql, useStaticQuery } from 'gatsby';

export const useInternalPaths: () => string[] = () => {
  const {
    pages: { nodes },
  } = useStaticQuery(graphql`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  return (nodes as any[]).map((node: { path: string }) => node.path);
};
