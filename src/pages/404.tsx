import { Center, Container, Image, MediaQuery, Stack, Text } from '@mantine/core';
import { HeadFC } from 'gatsby';
import React from 'react';
import { Link, SiteMetadata } from '~/components';
import logo404 from '~/images/404.svg';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Center mih="100vh">
        <Stack ta="center" align="center">
          <MediaQuery smallerThan="md" styles={{ width: 150, height: 150 }}>
            <Stack w={232} h={232}>
              <Image src={logo404} alt="ICX" />
            </Stack>
          </MediaQuery>

          <MediaQuery smallerThan="md" styles={{ fontSize: 24, marginTop: 0 }}>
            <Text mt="lg" fz={48} fw="bold" c="#838383">
              Something&apos;s missing
            </Text>
          </MediaQuery>

          <MediaQuery smallerThan="md" styles={{ fontSize: 16, marginTop: 0 }}>
            <Text mt="md" fz={20}>
              We can&apos;t find the page you&apos;re looking for,
              <br /> It seems like the page you&apos;re trying to reach has been moved,
              <br /> deleted or simply doesn&apos;t exist.
            </Text>
          </MediaQuery>
          <Link to="/">Back to Homepage</Link>
        </Stack>
      </Center>
    </Container>
  );
};

export const Head: HeadFC = () => <SiteMetadata />;

export default NotFoundPage;
