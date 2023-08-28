import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export const SiteMetadata: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
}> = ({ title = 'ICX', metaDescription, ogImageUrl = '' }) => {
  const { title: defaultTitle, description } = useSiteMetadata();

  return (
    <>
      <title>{title + ' - ' + defaultTitle}</title>

      {/* metadata */}
      <meta name="title" content={title + ' - ' + defaultTitle} />
      <meta name="description" content={metaDescription || description} />
      <meta name="og:image" content={ogImageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title + ' - ' + defaultTitle} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
};
