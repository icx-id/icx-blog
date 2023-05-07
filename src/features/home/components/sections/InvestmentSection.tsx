import React, { FC, useState } from 'react';
import { InvestmentSectionProps } from '../../types';
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  MediaQuery,
  Stack,
  Text,
  TypographyStylesProvider,
  createStyles,
} from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Carousel, Embla } from '@mantine/carousel';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

// ------------------------------------------ styles

const useStyles = createStyles(theme => ({
  root: {
    color: '#fff',
    backgroundColor: '#000',
    paddingTop: 160,
    paddingBottom: 160,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 80,
      paddingBottom: 80,
    },
  },

  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '64px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: 24,
      lineHeight: '32px',
    },
  },

  subtitle: {
    color: 'inherit',
    maxWidth: 600,
    marginTop: 24,
    fontSize: 20,
    fontWeight: 300,
    lineHeight: '32px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      marginTop: 16,
      fontSize: 14,
      lineHeight: '20px',
      maxWidth: 400,
    },
    span: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: '24px',
      [theme.fn.smallerThan('md')]: {
        fontSize: 14,
        lineHeight: '20px',
      },
    },
  },

  gridWrapper: {
    marginTop: 130,
    [theme.fn.smallerThan('md')]: {
      marginTop: 56,
    },
  },

  flowTitle: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '24px',
    [theme.fn.smallerThan('md')]: {
      paddingTop: 24,
      fontSize: 20,
      lineHeight: '24px',
      textAlign: 'center',
    },
  },

  flowSubtitle: {
    paddingTop: 16,
    maxWidth: 400,
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    [theme.fn.smallerThan('md')]: {
      paddingTop: 16,
      fontSize: 14,
      lineHeight: '20px',
      textAlign: 'center',
    },
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 100ms linear',
  },

  imageStyle: {
    [theme.fn.smallerThan('sm')]: {
      width: 216,
      height: 216,
      borderRadius: 10,
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

// ------------------------------------------ components

export const InvestmentSection: FC<InvestmentSectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

  const [embla, setEmbla] = useState<Embla | null>(null);

  return (
    <Box className={classes.root}>
      <Container size="ll">
        <Stack spacing={0} align="center">
          <Text className={classes.title}>{props.title}</Text>
          <TypographyStylesProvider className={classes.subtitle}>
            <div dangerouslySetInnerHTML={{ __html: props.subtitle }} />
          </TypographyStylesProvider>
        </Stack>

        <Grid gutter={128} mt={80} px={80} className={(classes.gridWrapper, classes.hiddenMobile)}>
          {props.flows.map(flow => (
            <Grid.Col key={flow.title} xs={12} md={6}>
              <Group spacing={32} align="center" noWrap>
                <Box>
                  {/* <GatsbyImage image={flow.image.childImageSharp.gatsbyImageData} alt={flow.title} /> */}
                  <Image
                    imageProps={{ loading: 'lazy' }}
                    src={flow.image}
                    maw={164}
                    mah={164}
                    sx={{ img: { borderRadius: '10px' } }}
                  />
                </Box>
                <Stack spacing={0}>
                  <Text className={classes.flowTitle}>{flow.title}</Text>
                  <Text className={classes.flowSubtitle}>{flow.description}</Text>
                </Stack>
              </Group>
            </Grid.Col>
          ))}
        </Grid>

        <Carousel
          mx="auto"
          withControls={false}
          mt={56}
          slideGap="xl"
          className={classes.hiddenDesktop}
          getEmblaApi={setEmbla}>
          {props.flows.map(flow => (
            <Carousel.Slide key={flow.title}>
              <Flex direction="column" align="center" sx={{ height: '100%' }}>
                {/* <GatsbyImage
                  image={flow.image.childImageSharp.gatsbyImageData}
                  alt={flow.title}
                  className={classes.imageStyle}
                /> */}
                <Image
                  imageProps={{ loading: 'lazy' }}
                  src={flow.image}
                  width={192}
                  height={192}
                  sx={{ img: { borderRadius: '8px' } }}
                />
                <Text className={classes.flowTitle}>{flow.title}</Text>
                <Text className={classes.flowSubtitle}>{flow.description}</Text>
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Center mt={40}>
            <Group>
              <Box
                className={classes.iconWrapper}
                sx={{
                  cursor: embla?.canScrollPrev ? 'pointer' : 'default',
                  backgroundColor: embla?.canScrollPrev ? '#292929' : 'grey',
                  ':hover': {
                    backgroundColor: embla?.canScrollPrev ? '#494949' : 'grey',
                  },
                }}
                onClick={() => embla?.scrollPrev()}>
                <IconChevronLeft color={embla?.canScrollPrev ? '#fff' : '#000'} />
              </Box>
              <Box
                className={classes.iconWrapper}
                sx={{
                  cursor: embla?.canScrollNext ? 'pointer' : 'default',
                  backgroundColor: embla?.canScrollNext ? '#292929' : 'grey',
                  ':hover': {
                    backgroundColor: embla?.canScrollNext ? '#494949' : 'grey',
                  },
                }}
                onClick={() => embla?.scrollNext()}>
                <IconChevronRight color={embla?.canScrollNext ? '#fff' : '#000'} />
              </Box>
            </Group>
          </Center>
        </MediaQuery>
      </Container>
    </Box>
  );
};
