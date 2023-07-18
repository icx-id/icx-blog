import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

const pageHide = 'register' || 'kyc';

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions: { deletePage },
}) => {
  if (page.path.match(pageHide)) {
    deletePage(page);
  }
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode, trailingSlash: false });

    createNodeField({
      name: `slug`,
      node,
      value: value.split('/').pop(),
    });
  }
};
