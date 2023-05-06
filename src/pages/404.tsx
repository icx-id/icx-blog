import { Container, Image, Text } from '@mantine/core';
import { HeadFC } from 'gatsby';
import React from 'react';
import { SiteMetadata } from '~/components';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Container size="ll">
        <Image src="/img/logo.png" alt="ICX" maw={100} mb={50} />
        <Text fz="xl" fw="bold">
          Page not found
        </Text>
        <Text fz="md">Sorry, we couldn’t find what you were looking for.</Text>
      </Container>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SiteMetadata />;
