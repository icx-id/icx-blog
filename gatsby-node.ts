import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

const pageHide = 'register' || 'kyc';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<{
    allMarkdownRemark: {
      edges: {
        node: any;
      }[];
    };
  }>(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "blog-article" }, draft: { eq: false } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const blogDetail = path.resolve('./src/pages/blog/{markdownRemark.fields__slug}.tsx');

  result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogDetail,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode, trailingSlash: false, basePath: 'pages' });

    createNodeField({
      node,
      name: `slug`,
      value: value,
    });
  }
};

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions: { deletePage },
}) => {
  if (page.path.match(pageHide)) {
    deletePage(page);
  }
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      tag: [String]
    }
  `;

  createTypes(typeDefs);
};
