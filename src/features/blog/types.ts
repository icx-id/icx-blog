export interface BlogArticleNode {
  id: string;
  rawMarkdownBody: string;
  tableOfContents: string;
  frontmatter: {
    author: string;
    key: string;
    draft: boolean;
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    date: Date;
    category: string[];
    featuredImage: {
      alt: string;
      src: string;
      title: string;
    };
    tag: string[];
  };
  fields: {
    slug: string;
  };
}

export interface BlogArticlesQueryResponse {
  allMarkdownRemark: {
    edges: {
      node: BlogArticleNode;
    }[];
  };
}

export interface BlogArticleQueryResponse {
  markdownRemark: BlogArticleNode;
}
