import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export const SiteMetadata: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
}> = ({ title = 'ICX', metaDescription, ogImageUrl = '', pathname = '' }) => {
  const { title: defaultTitle, description } = useSiteMetadata();

  const pageUrl = 'https://icx.netlify.app' + pathname;

  return (
    <>
      <title>{title + ' - ' + defaultTitle}</title>

      {/* metadata */}
      <meta name="title" content={title + ' - ' + defaultTitle} />
      <meta name="description" content={metaDescription || description} />
      <meta name="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:url" content={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:title" content={title + ' - ' + defaultTitle} />
      <meta property="og:description" content={metaDescription || description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title + ' - ' + defaultTitle} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
};
