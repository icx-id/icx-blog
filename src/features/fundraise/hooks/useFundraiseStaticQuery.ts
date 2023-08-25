// import { graphql, useStaticQuery } from 'gatsby';
// import { FundraiseStaticQueryProps } from '../types';

// export const useFundraiseStaticQuery = (): FundraiseStaticQueryProps => {
//   const fundraiseStaticQuery = useStaticQuery(graphql`
//     query FundraiseStaticQuery {
//       markdownRemark(frontmatter: { key: { eq: "fundraising" } }) {
//         frontmatter {
//           key
//           jumbotronSection {
//             title
//             desc
//           }
//           portfolioSection {
//             title
//             desc
//             descLine2
//           }
//           whyFundraiseSection {
//             title
//             data {
//               icon
//               title
//               desc
//             }
//           }
//           testimonySection {
//             testimonies {
//               author
//               authorImage
//               company
//               description
//               image
//             }
//           }
//           howToFundraiseSection {
//             title
//             desc
//             descLine2
//           }
//           investmentFlowSection {
//             title
//             desc
//             descLine2
//           }
//           contactUsSection {
//             title
//             desc
//           }
//         }
//       }
//     }
//   `);

//   return fundraiseStaticQuery.markdownRemark.frontmatter;
// };
