import {
  Image,
  Stack,
  Text,
  Anchor,
  Group,
  Flex,
  useMantineTheme,
  em,
  getBreakpointValue,
  Badge,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Link } from 'gatsby';
import React from 'react';

interface BlogArticleListItemProps {
  title: string;
  intro: string;
  image: string;
  slug: string;
  pinned?: boolean;
}

export const BlogArticleListItem: React.FC<BlogArticleListItemProps> = ({
  image,
  intro,
  title,
  slug,
  pinned,
}) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`,
  );

  return (
    <Anchor
      component={Link}
      to={`${slug}`}
      target="_blank"
      color="dark"
      sx={{
        ':hover': {
          textDecoration: 'none',
        },
      }}>
      <Flex gap={12} direction={{ xs: 'row', sm: 'column' }} pos="relative">
        {pinned && (
          <Badge
            pos="absolute"
            top={8}
            sx={{ zIndex: 2, right: isMobile ? 'unset' : 8, left: isMobile ? 8 : 'unset' }}>
            Pinned
          </Badge>
        )}
        <Image
          src={image}
          sx={{
            maxWidth: isMobile ? '50%' : '100%',
            minWidth: isMobile ? '50%' : '100%',
          }}
          styles={{
            image: {
              borderRadius: '4px',
              aspectRatio: isMobile ? '3 / 2' : '16 / 9',
            },
          }}
        />
        <Stack h="100%">
          <Stack justify="space-between" h="100%">
            <Text fw="bold" lineClamp={isMobile ? 3 : 2} lh={1.5}>
              {title}
            </Text>
            {!isMobile && (
              <Text fz="sm" lineClamp={3}>
                {intro}
              </Text>
            )}
          </Stack>

          <Group spacing="lg">
            <Text fw="bold" fz="sm" color="#333333" variant="white">
              Read More <IconArrowUpRight />
            </Text>
          </Group>
        </Stack>
      </Flex>
    </Anchor>
  );
};
