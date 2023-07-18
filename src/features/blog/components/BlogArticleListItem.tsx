import { AspectRatio, Image, Stack, Text, Anchor, Group, Box } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Link } from 'gatsby';
import React from 'react';

interface BlogArticleListItemProps {
  title: string;
  intro: string;
  image: string;
  slug: string;
}

export const BlogArticleListItem: React.FC<BlogArticleListItemProps> = ({
  image,
  intro,
  title,
  slug,
}) => {
  return (
    <Stack spacing={12}>
      <Stack sx={{ flex: 1 }} spacing={12}>
        <Image
          src={image}
          styles={{
            image: {
              aspectRatio: '16 / 9',
            },
          }}
        />
        <Text fw="bold">{title}</Text>
        <Text fz="sm">{intro.length >= 139 ? intro.slice(0, 139) + '...' : intro}</Text>
      </Stack>
      <Anchor
        fw="bold"
        fz="sm"
        color="#333333"
        variant="white"
        component={Link}
        to={`/blog/${slug}`}
        target="_blank">
        <Group spacing="lg">
          Read More <IconArrowUpRight />
        </Group>
      </Anchor>
    </Stack>
  );
};
