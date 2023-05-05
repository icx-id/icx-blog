/* eslint-disable react/no-children-prop */
import { rem } from '@mantine/core';
import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const P = ({ children }: { children: ReactNode }) => (
    <p style={{ marginBottom: 0, marginTop: 0, fontSize: rem(16) }}>{children}</p>
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
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        p: P,
        h5: H5,
        h6: H6,
        table: Table,
      }}
    />
  );
};
