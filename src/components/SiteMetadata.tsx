import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const SiteMetadata: React.FC<{ title?: string }> = ({ title = "ICX" }) => {
  const { title: defaultTitle, description } = useSiteMetadata();
  return (
    <>
      <title>
        {title} - {defaultTitle}
      </title>
      <meta name="description" content={description} />
    </>
  );
};

export default SiteMetadata;
