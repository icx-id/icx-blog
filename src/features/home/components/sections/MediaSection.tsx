import React, { FC } from 'react';
import { MediaSectionProps } from '../../types';
import { Box, Container, Grid, Group, Stack, Text, createStyles } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';

// ----------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 144,
    paddingBottom: 265,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 103,
      paddingBottom: 232,
    },
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontWeight: 400,
    },
  },

  subtitle: {
    maxWidth: 1000,
    marginTop: 60,
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '58px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.fn.smallerThan('md')]: {
      marginTop: 42,
      fontSize: 24,
      lineHeight: '28px',
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}));

// ----------------------------------------- components

export const MediaSection: FC<MediaSectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container size="xl">
        <Stack>
          <Text className={classes.title}>{props.title}</Text>
          <Text className={classes.subtitle}>{props.subtitle}</Text>
        </Stack>

        <Group noWrap mt={86} className={classes.hiddenMobile}>
          {props.medias.map(media => (
            <GatsbyImage
              key={media.mediaName}
              image={media.logo.childImageSharp.gatsbyImageData}
              alt={media.mediaName}
            />
          ))}
        </Group>

        <Grid mt={32} className={classes.hiddenDesktop}>
          {props.medias.map(media => (
            <Grid.Col
              key={media.mediaName}
              span={6}
              sx={{ display: 'flex', justifyContent: 'center' }}>
              <GatsbyImage
                image={media.logo.childImageSharp.gatsbyImageData}
                alt={media.mediaName}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
