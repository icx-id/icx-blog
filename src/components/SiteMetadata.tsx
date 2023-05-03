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

      {/* styles */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
