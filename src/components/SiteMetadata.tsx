import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export const SiteMetadata: React.FC<{ title?: string; metaDescription?: string }> = ({
  title = 'ICX',
  metaDescription,
}) => {
  const { title: defaultTitle, description } = useSiteMetadata();
  return (
    <>
      <title>
        {title} - {defaultTitle}
      </title>

      {/* metadata */}
      <meta name="description" content={metaDescription || description} />
    </>
  );
};
