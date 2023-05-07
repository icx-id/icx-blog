import React, { FC, useState } from 'react';
import { TestimonySectionProps } from '../../types';
import {
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  MediaQuery,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
  em,
  getBreakpointValue,
  keyframes,
} from '@mantine/core';
import { StaticImage } from 'gatsby-plugin-image';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import testimonyIcon from '~/images/testimony-icon.svg';

// -------------------------------------- styles

export const fade = keyframes({
  '0%,100%': { opacity: 1 },
  '50%': { opacity: 0.25 },
});

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: '144px',
    paddingBottom: '100px',
    [theme.fn.smallerThan('md')]: {
      paddingTop: '96px',
      paddingBottom: '71px',
    },
  },

  testimonyTitle: {
    fontSize: 24,
    fontWeight: 600,
  },

  description: {
    maxWidth: 650,
    minHeight: 300,
    paddingRight: 100,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '32px',
    animation: `${fade} 0.5s ease forwards`,
    [theme.fn.smallerThan('md')]: {
      fontSize: 18,
      lineHeight: '24px',
      paddingRight: 0,
      minHeight: 'initial',
    },
  },

  author: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '20px',
    animation: `${fade} 0.5s ease forwards`,
    [theme.fn.smallerThan('md')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },

  // company: {
  //   fontSize: 18,
  //   fontWeight: 400,
  //   lineHeight: '24px',
  //   [theme.fn.smallerThan('md')]: {
  //     fontSize: 14,
  //     lineHeight: '20px',
  //   },
  // },

  company: {
    paddingTop: 8,
    color: '#6B7280',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '20px',
    animation: `${fade} 0.5s ease forwards`,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 4,
      fontSize: 14,
      lineHeight: '20px',
    },
  },

  imageBackground: {
    maxWidth: 'calc(100% + 48px)',
    height: '320px',
    backgroundColor: '#D6E6FC',
    position: 'relative',
  },

  imageWrapperDesktop: {
    width: 380,
    position: 'absolute',
    top: '50%',
    left: -60,
    transform: 'translateY(-50%)',
    zIndex: 1,
  },

  imageWrapperMobile: {
    position: 'absolute',
    bottom: -40,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #EEE7E7',
    transition: 'background-color 100ms linear',
    [theme.fn.smallerThan('md')]: {
      width: 32,
      height: 32,
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

// -------------------------------------- components

const LineNavigator: FC<any> = ({ classes, testimonies, active, onClickPrev, onClickNext }) => {
  return (
    <Group spacing={32} pt={32}>
      <Group spacing={12}>
        <Box
          className={classes.iconWrapper}
          sx={{
            cursor: active > 0 ? 'pointer' : 'default',
            backgroundColor: active > 0 ? 'initial' : 'grey',
            ':hover': {
              backgroundColor: active > 0 ? 'lightgrey' : 'grey',
            },
          }}
          onClick={onClickPrev}>
          <IconChevronLeft color={active > 0 ? '#000' : 'lightgrey'} />
        </Box>
        <Box
          className={classes.iconWrapper}
          sx={{
            cursor: active < testimonies.length - 1 ? 'pointer' : 'default',
            backgroundColor: active < testimonies.length - 1 ? 'initial' : 'grey',
            ':hover': {
              backgroundColor: active < testimonies.length - 1 ? 'lightgrey' : 'grey',
            },
          }}
          onClick={onClickNext}>
          <IconChevronRight color={active < testimonies.length - 1 ? '#000' : 'lightgrey'} />
        </Box>
      </Group>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Group spacing={0} maw={300} noWrap>
          {testimonies.map((testi: any, index: any) => (
            <Box
              key={testi.author}
              sx={{
                height: '4px',
                width: `calc(300px / ${testimonies.length})`,
                backgroundColor: active === index ? '#00C48F' : '#C1FFEE',
              }}
            />
          ))}
        </Group>
      </MediaQuery>
    </Group>
  );
};

export const TestimonySection: FC<TestimonySectionProps> = ({ ...props }) => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`,
  );

  const [active, setActive] = useState(0);

  const onClickPrev = () => {
    if (active > 0) {
      setActive(prev => prev - 1);
    }
  };

  const onClickNext = () => {
    if (active < props.testimonies.length - 1) {
      setActive(prev => prev + 1);
    }
  };

  return (
    <Box className={classes.root}>
      <Container size="ll">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Grid gutter={0}>
            <Grid.Col xs="auto" pos="relative">
              <Flex align="center">
                <Text className={classes.testimonyTitle}>What They Said</Text>
                <ThemeIcon variant="" ml="md" mt={4}>
                  <Image src={testimonyIcon} />
                </ThemeIcon>
              </Flex>
              <Text>Hear what people have said about ICX</Text>
              <Stack spacing={0} justify="center" h="100%">
                <Text key={`description-${active}`} className={classes.description}>
                  {props.testimonies[active].description}
                </Text>
                <Text key={`author-${active}`} className={classes.author}>
                  {props.testimonies[active].author}
                </Text>
                <Text key={`company-${active}`} className={classes.company}>
                  {props.testimonies[active].company}
                </Text>
                <LineNavigator
                  classes={classes}
                  testimonies={props.testimonies}
                  active={active}
                  onClickPrev={onClickPrev}
                  onClickNext={onClickNext}
                />
              </Stack>
            </Grid.Col>
            <Grid.Col xs={4} sx={{ position: 'relative' }}>
              <Box w="calc(100% + 64px)" h={600} pos="relative" sx={{ overflow: 'hidden' }}>
                <StaticImage
                  src="../../../../images/gradient-purple.png"
                  alt="gradient-purple"
                  style={{ width: 850, height: '100%' }}
                />
              </Box>
              <Box className={classes.imageWrapperDesktop}>
                {/* <GatsbyImage
                image={props.testimonies[active].image.childImageSharp.gatsbyImageData}
                alt="testimony"
              /> */}
                <Image src={props.testimonies[active].image} />
              </Box>
            </Grid.Col>
          </Grid>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Box>
            <Box pos="relative">
              <Box ta="left" mb="md">
                <Flex align="center">
                  <Text className={classes.testimonyTitle}>What They Said</Text>
                  <ThemeIcon variant="" ml="md" mt={4}>
                    <Image src={testimonyIcon} />
                  </ThemeIcon>
                </Flex>
                <Text>Hear what people have said about ICX</Text>
              </Box>
              <Box
                w="calc(100% + 48px)"
                h={isMobile ? 225 : 320}
                ml={-24}
                pos="relative"
                sx={{ overflow: 'hidden', backgroundColor: '#D6E6FC' }}>
                <StaticImage
                  src="../../../../images/gradient-purple.png"
                  alt="gradient-purple"
                  style={{ width: 360, height: '100%' }}
                />
              </Box>
              <Box className={classes.imageWrapperMobile}>
                {/* <GatsbyImage
                image={props.testimonies[active].image.childImageSharp.gatsbyImageData}
                style={{ borderRadius: '8px', height: 300 }}
                alt="testimony"
              /> */}
                <Image
                  src={props.testimonies[active].image}
                  width={isMobile ? 200 : 290}
                  height={isMobile ? 225 : 312}
                  sx={{ img: { borderRadius: '10px' } }}
                />
              </Box>
            </Box>
            {/* TODO: enable author image */}
            {/* <Box mt={96}>
              <GatsbyImage
              image={props.testimonies[active].authorImage.childImageSharp.gatsbyImageData}
              style={{ width: 75, height: 75 }}
              alt="author"
            />
              <Image src={props.testimonies[active].authorImage} maw={50} mah={50} />
            </Box> */}
            <Box mt={96}>
              <Text key={`description-mobile-${active}`} className={classes.description}>
                {props.testimonies[active].description}
              </Text>
            </Box>
            <Box mt={32}>
              <Text key={`author-mobile-${active}`} className={classes.author}>
                {props.testimonies[active].author},
              </Text>
              <Text key={`company-mobile-${active}`} className={classes.company}>
                {props.testimonies[active].company}
              </Text>
            </Box>
            <Box>
              <LineNavigator
                classes={classes}
                testimonies={props.testimonies}
                active={active}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
              />
            </Box>
          </Box>
        </MediaQuery>
      </Container>
    </Box>
  );
};
