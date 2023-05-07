import React, { FC } from 'react';
import { MediaSectionProps } from '../../types';
import {
  Box,
  Container,
  Grid,
  Group,
  Image,
  MediaQuery,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';

// ----------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 176,
    paddingBottom: 176,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 96,
      paddingBottom: 96,
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

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Grid mt={40}>
            {props.medias.map((media, index, arr) => {
              const len = arr.length;
              const lastItem = index === len - 1 && len % 2 !== 0;

              return (
                <Grid.Col
                  key={media.mediaName}
                  span={6}
                  sx={{ display: 'flex', justifyContent: 'center' }}>
                  {/* <GatsbyImage
                  image={media.logo.childImageSharp.gatsbyImageData}
                  alt={media.mediaName}
                /> */}
                  <Image
                    src={media.logo}
                    sx={{
                      position: lastItem ? 'relative' : 'initial',
                      zIndex: lastItem ? 1 : 'initial',
                      left: lastItem ? '50%' : 0,
                    }}
                  />
                </Grid.Col>
              );
            })}
          </Grid>
        </MediaQuery>
      </Container>
    </Box>
  );
};
