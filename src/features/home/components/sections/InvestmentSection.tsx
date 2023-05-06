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
    paddingTop: 156,
    paddingBottom: 58,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 77,
    },
  },

  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '64px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: 32,
      lineHeight: '40px',
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
      [theme.fn.smallerThan('md')]: {
        fontSize: 16,
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
    paddingTop: 24,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '32px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      paddingTop: 24,
      fontSize: 20,
      lineHeight: '24px',
    },
  },

  flowSubtitle: {
    paddingTop: 24,
    maxWidth: 400,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      paddingTop: 16,
      fontSize: 14,
      lineHeight: '20px',
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

        <Grid gutter={32} mt={120} className={(classes.gridWrapper, classes.hiddenMobile)}>
          {props.flows.map(flow => (
            <Grid.Col key={flow.title} xs={12} md={6}>
              <Flex direction="column" align="center" sx={{ height: '100%', marginBottom: 100 }}>
                {/* <GatsbyImage image={flow.image.childImageSharp.gatsbyImageData} alt={flow.title} /> */}
                <Image
                  src={flow.image}
                  maw={357}
                  height={276}
                  sx={{ img: { borderRadius: '10px' } }}
                />
                <Text className={classes.flowTitle}>{flow.title}</Text>
                <Text className={classes.flowSubtitle}>{flow.description}</Text>
              </Flex>
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
                  src={flow.image}
                  width={224}
                  height={224}
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
