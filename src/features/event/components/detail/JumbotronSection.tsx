import React, { FC, useState } from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Group,
  Image,
  MediaQuery,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import HeroBackground from '../../assets/event-detail-hero-bg.png';
import { Banner } from '../../types';

// ---------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
  },

  background: {
    width: '100%',
    height: 400,
    backgroundImage: `url(${HeroBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '75% bottom',
    backgroundSize: '120%',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}));

// ---------------------------------------- components

type JumbotronSectionProps = {
  banners: Banner[];
};

// const banners = [
//   'https://via.placeholder.com/600/771796',
//   'https://via.placeholder.com/600/d32776',
//   'https://via.placeholder.com/600/f9cee5',
//   'https://via.placeholder.com/600/392537',
//   'https://via.placeholder.com/600/e9b68',
// ];

export const JumbotronSection: FC<JumbotronSectionProps> = ({ banners = [] }) => {
  const { classes, theme } = useStyles();

  const [activeCarousel, setActiveCarousel] = useState<number>(0);

  return (
    <section className={classes.root}>
      <Box className={classes.background}>
        <Text>jumbotron section</Text>
      </Box>

      <MediaQuery smallerThan="md" styles={{ marginTop: 0 }}>
        <Stack spacing={0} align="center" mt={-360}>
          <Flex justify="center">
            <Box
              mx={24}
              maw={960}
              mah={480}
              sx={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                overflow: 'hidden',
                borderRadius: 12,
              }}>
              <Carousel
                mx="auto"
                withControls={false}
                onSlideChange={index => setActiveCarousel(index)}>
                {banners &&
                  Array.isArray(banners) &&
                  banners.map((banner, index) => (
                    <Carousel.Slide key={index} w="100%">
                      <AspectRatio ratio={16 / 9} w="700px" maw="100vw">
                        <Image src={banner.url} withPlaceholder />
                      </AspectRatio>
                    </Carousel.Slide>
                  ))}
              </Carousel>
            </Box>
          </Flex>
          <Group mt={{ base: 8, md: 16 }} spacing={8}>
            {banners &&
              Array.isArray(banners) &&
              banners.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    border: `1px solid #00c48f`,
                    backgroundColor: index === activeCarousel ? '#00c48f' : 'transparent',
                    [theme.fn.smallerThan('xs')]: {
                      width: 8,
                      height: 8,
                    },
                  }}
                />
              ))}
          </Group>
        </Stack>
      </MediaQuery>
    </section>
  );
};
