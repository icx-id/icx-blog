import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const HomePage: React.FC<PageProps> = () => {
  return <main>ICX</main>;
};

export default HomePage;

export const Head: HeadFC = () => (
  <title>ICX - Unlock your new level investment</title>
);
