import { Box, Center, Image, Stack, Text } from '@mantine/core';
import { HeadFC } from 'gatsby';
import React from 'react';
import { Link, SiteMetadata } from '~/components';
import logo404 from '~/images/404.svg';

const NotFoundPage: React.FC = () => {
  return (
    <Center h="100vh">
      <Stack ta="center" align="center">
        <Stack w={232} h={232}>
          <Image src={logo404} alt="ICX" />
        </Stack>
        <Text mt="lg" fz={48} fw="bold" c="#838383">
          Something&apos;s missing
        </Text>
        <Text mt="mdF" fz={20}>
          We can&apos;t find the page you&apos;re looking for,
          <br /> It seems like the page you&apos;re trying to reach has been moved,
          <br /> deleted or simply doesn&apos;t exist.
        </Text>
        <Link to="/">Back to Homepage</Link>
      </Stack>
    </Center>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SiteMetadata />;
