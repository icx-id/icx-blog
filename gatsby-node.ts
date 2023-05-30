import { GatsbyNode } from 'gatsby';

const pageHide = 'register' || 'kyc';

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions: { deletePage },
}) => {
  if (page.path.match(pageHide)) {
    deletePage(page);
  }
};
