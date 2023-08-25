import { graphql, useStaticQuery } from 'gatsby';
import type { HomeStaticQueryProps } from '../types';

export const useHomeStaticQuery = (): HomeStaticQueryProps => {
  // TODO: enable when using gatsby image
  // const homeStaticQuery = useStaticQuery(graphql`
  //   query HomeStaticQuery {
  //     markdownRemark(frontmatter: { key: { eq: "home" } }) {
  //       frontmatter {
  //         key
  //         heroSection {
  //           title
  //           subtitle
  //           appImage {
  //             childImageSharp {
  //               gatsbyImageData(width: 474, height: 958, placeholder: BLURRED)
  //             }
  //           }
  //           download {
  //             name
  //             logo {
  //               childImageSharp {
  //                 gatsbyImageData(width: 242, height: 72, placeholder: BLURRED)
  //               }
  //             }
  //             link
  //           }
  //         }
  //         companyListSection {
  //           title
  //           imageDesktop {
  //             childImageSharp {
  //               gatsbyImageData(width: 1053, height: 125, placeholder: BLURRED)
  //             }
  //           }
  //           imageMobile {
  //             childImageSharp {
  //               gatsbyImageData(width: 341, height: 87, placeholder: BLURRED)
  //             }
  //           }
  //         }
  //         testimonySection {
  //           title
  //           subtitle
  //           testimonies {
  //             author
  //             authorImage {
  //               childImageSharp {
  //                 gatsbyImageData(width: 75, height: 75, placeholder: BLURRED)
  //               }
  //             }
  //             company
  //             description
  //             image {
  //               childImageSharp {
  //                 gatsbyImageData(width: 560, height: 706, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //         }
  //         investmentSection {
  //           title
  //           subtitle
  //           flows {
  //             title
  //             description
  //             image {
  //               childImageSharp {
  //                 gatsbyImageData(width: 458, height: 337, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //         }
  //         investorSection {
  //           title
  //           subtitle
  //           fundraising {
  //             count
  //             label
  //             background {
  //               childImageSharp {
  //                 gatsbyImageData(width: 695, height: 283, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //           employment {
  //             count
  //             label
  //             background {
  //               childImageSharp {
  //                 gatsbyImageData(width: 695, height: 283, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //           investor {
  //             title
  //             imageDesktop {
  //               childImageSharp {
  //                 gatsbyImageData(width: 1590, height: 643, placeholder: BLURRED)
  //               }
  //             }
  //             imageMobile {
  //               childImageSharp {
  //                 gatsbyImageData(width: 300, height: 280, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //         }
  //         mediaSection {
  //           title
  //           subtitle
  //           medias {
  //             mediaName
  //             logo {
  //               childImageSharp {
  //                 gatsbyImageData(width: 224, height: 74, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const homeStaticQuery = useStaticQuery(graphql`
    query HomeStaticQuery {
      markdownRemark(frontmatter: { key: { eq: "home" } }) {
        frontmatter {
          key
          heroSection {
            title
            subtitle
            appImage
            download {
              name
              logo
              link
            }
          }
          companyListSection {
            title
            imageDesktop
            imageMobile
          }
          testimonySection {
            title
            subtitle
            testimonies {
              author
              authorImage
              company
              description
              image
            }
          }
          investmentSection {
            title
            subtitle
            flows {
              title
              description
              image
            }
          }
          investorSection {
            title
            subtitle
            fundraising {
              count
              label
              background
            }
            employment {
              count
              label
              background
            }
            investor {
              title
              imageDesktop
              imageMobile
            }
          }
          mediaSection {
            title
            subtitle
            medias {
              mediaName
              logo
            }
          }
        }
      }
    }
  `);

  return homeStaticQuery.markdownRemark.frontmatter;
};
