import React, { FC, useState } from 'react';
import { InvestmentSectionProps } from '../../types';
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
    fontSize: 64,
    fontWeight: 600,
    lineHeight: '77px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: 34,
      lineHeight: '39px',
    },
  },

  subtitle: {
    maxWidth: 843,
    marginTop: 43,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '29px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: '20px',
    },
  },

  gridWrapper: {
    marginTop: 130,
    [theme.fn.smallerThan('md')]: {
      marginTop: 56,
    },
  },

  flowTitle: {
    paddingTop: 36,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '48px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      paddingTop: 24,
      fontSize: 26,
      lineHeight: '31px',
    },
  },

  flowSubtitle: {
    paddingTop: 36,
    maxWidth: 550,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '32px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      paddingTop: 24,
      fontSize: 16,
      lineHeight: '20px',
    },
  },

  iconWrapper: {
    width: 50,
    height: 50,
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
      <Container size="xl">
        <Stack>
          <Text className={classes.title}>{props.title}</Text>
          <Text className={classes.subtitle}>{props.subtitle}</Text>
        </Stack>

        <Grid gutter={32} mt={120} className={(classes.gridWrapper, classes.hiddenMobile)}>
          {props.flows.map(flow => (
            <Grid.Col key={flow.title} xs={12} md={6}>
              <Flex direction="column" align="center" sx={{ height: '100%', marginBottom: 100 }}>
                <GatsbyImage image={getImage(flow.image)!} alt={flow.title} />
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
                <GatsbyImage
                  image={getImage(flow.image)!}
                  alt={flow.title}
                  className={classes.imageStyle}
                />
                <Text className={classes.flowTitle}>{flow.title}</Text>
                <Text className={classes.flowSubtitle}>{flow.description}</Text>
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel>

        <Center mt={32} className={classes.hiddenDesktop}>
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
      </Container>
    </Box>
  );
};
