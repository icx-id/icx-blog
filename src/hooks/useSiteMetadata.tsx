import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = { title: string; siteUrl: string };

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
