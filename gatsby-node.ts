import { fmImagesToRelative } from 'gatsby-remark-relative-images-v2';

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
