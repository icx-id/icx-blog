import React, { FC } from 'react';
import { MediaSectionProps } from '../../types';
import { Box, Container, Grid, Group, Image, Stack, Text, createStyles } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';

// ----------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 200,
    paddingBottom: 265,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 103,
      paddingBottom: 232,
    },
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '20Spx',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontWeight: 400,
    },
  },

  subtitle: {
    maxWidth: 1000,
    marginTop: 40,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '54px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      marginTop: 32,
      fontSize: 24,
      lineHeight: '32px',
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
      <Container size="ll">
        <Stack spacing={0} align="center">
          <Text className={classes.title}>{props.title}</Text>
          <Text className={classes.subtitle}>{props.subtitle}</Text>
        </Stack>

        <Group noWrap mt={86} className={classes.hiddenMobile}>
          {props.medias.map(media => (
            // <GatsbyImage
            //   key={media.mediaName}
            //   image={media.logo.childImageSharp.gatsbyImageData}
            //   alt={media.mediaName}
            // />
            <Image key={media.mediaName} src={media.logo} />
          ))}
        </Group>

        <Grid mt={40} className={classes.hiddenDesktop}>
          {props.medias.map(media => (
            <Grid.Col
              key={media.mediaName}
              span={6}
              sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* <GatsbyImage
                image={media.logo.childImageSharp.gatsbyImageData}
                alt={media.mediaName}
              /> */}
              <Image src={media.logo} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
