/* eslint-disable react/no-children-prop */
import { rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { slugify } from '~/utils/slugify';

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const mobileScreen = useMediaQuery('(max-width: 30em)');

  const P = ({ children }: { children: ReactNode }) => (
    <p style={{ marginBottom: rem(16), marginTop: 0, fontSize: rem(16) }}>{children}</p>
  );
  const H5 = ({ children }: { children: ReactNode }) => (
    <h5 style={{ marginBottom: 0, marginTop: 0, fontWeight: 500, fontSize: rem(20) }}>
      {children}
    </h5>
  );
  const H6 = ({ children }: { children: ReactNode }) => (
    <h6
      style={{
        marginBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        fontSize: rem(16),
        color: '#00A478',
      }}>
      {children}
    </h6>
  );
  const Table = ({ children }: { children: ReactNode }) => (
    <table style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>{children}</table>
  );
  const Image = (props: any) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: mobileScreen ? '24px 0' : '42px 0',
      }}>
      <img {...props} loading="lazy" width={mobileScreen ? '100%' : '50%'} height="auto" />
    </div>
  );

  const Blockquote = ({ children }: { children: ReactNode }) => (
    <blockquote
      style={{
        margin: 0,
        marginLeft: rem(16),
        color: '#666',
        paddingLeft: rem(14),
        borderLeft: '3px solid #EEE',
      }}>
      {children}
    </blockquote>
  );

  const H2 = ({ children }: { children: ReactNode }) => {
    return <h2 id={slugify(children?.toString() || '')}>{children}</h2>;
  };

  const H3 = ({ children }: { children: ReactNode }) => {
    return <h3 id={slugify(children?.toString() || '')}>{children}</h3>;
  };

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        p: P,
        h5: H5,
        h6: H6,
        table: Table,
        blockquote: Blockquote,
        img: Image,
        h2: H2,
        h3: H3,
      }}
    />
  );
};
