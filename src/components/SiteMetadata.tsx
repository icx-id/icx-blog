import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export const SiteMetadata: React.FC<{ title?: string }> = ({ title = 'ICX' }) => {
  const { title: defaultTitle, description } = useSiteMetadata();
  return (
    <>
      <title>
        {title} - {defaultTitle}
      </title>

      {/* metadata */}
      <meta name="description" content={description} />
    </>
  );
};
