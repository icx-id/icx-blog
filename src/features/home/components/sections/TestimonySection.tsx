import React, { FC, useState } from 'react';
import { TestimonySectionProps } from '../../types';
import { Box, Container, Grid, Group, Stack, Text, createStyles } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

// -------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: '144px',
    paddingBottom: '100px',
    [theme.fn.smallerThan('md')]: {
      paddingTop: '96px',
      paddingBottom: '71px',
    },
  },

  description: {
    maxWidth: 898,
    paddingRight: 100,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '57px',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
    [theme.fn.smallerThan('md')]: {
      fontSize: 20,
      lineHeight: '28px',
      paddingRight: 0,
    },
  },

  author: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
      lineHeight: '25px',
    },
  },

  company: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: '32px',
    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
      lineHeight: '25px',
    },
  },

  imageBackground: {
    maxWidth: 'calc(100% + 48px)',
    height: '320px',
    marginLeft: -24,
    marginRight: -24,
    backgroundColor: '#D6E6FC',
    position: 'relative',
  },

  imageWrapper: {
    maxWidth: 390,
    marginLeft: -60,
    marginTop: 50,
    marginBottom: 50,
    [theme.fn.smallerThan('md')]: {
      width: 280,
      height: 300,
      borderRadius: '8px',
      position: 'absolute',
      top: 60,
      left: '50%',
      transform: 'translateX(-50%)',
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
    },
  },

  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #EEE7E7',
    transition: 'background-color 100ms linear',
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
    <Group spacing="xl" pt={40}>
      <Group>
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
      <Group spacing={0} maw={300} noWrap className={classes.hiddenMobile}>
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
    </Group>
  );
};

export const TestimonySection: FC<TestimonySectionProps> = ({ ...props }) => {
  const { classes } = useStyles();

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
      <Container size="xl">
        <Grid align="center" className={classes.hiddenMobile}>
          <Grid.Col xs="auto">
            <Stack spacing="xl">
              <Text className={classes.description}>{props.testimonies[active].description}</Text>
              <Text className={classes.author}>
                {props.testimonies[active].author},{' '}
                <Text span className={classes.company}>
                  {props.testimonies[active].company}
                </Text>
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
          <Grid.Col xs={4} sx={{ backgroundColor: '#D6E6FC' }}>
            <Box className={classes.imageWrapper}>
              <GatsbyImage
                image={props.testimonies[active].image.childImageSharp.gatsbyImageData}
                alt="testimony"
              />
            </Box>
          </Grid.Col>
        </Grid>

        <Box className={classes.hiddenDesktop}>
          <Box className={classes.imageBackground}>
            <Box className={classes.imageWrapper}>
              <GatsbyImage
                image={props.testimonies[active].image.childImageSharp.gatsbyImageData}
                style={{ borderRadius: '8px', height: 300 }}
                alt="testimony"
              />
            </Box>
          </Box>
          <Box mt={109}>
            <GatsbyImage
              image={props.testimonies[active].authorImage.childImageSharp.gatsbyImageData}
              style={{ width: 75, height: 75 }}
              alt="author"
            />
          </Box>
          <Box mt={50}>
            <Text className={classes.description}>{props.testimonies[active].description}</Text>
          </Box>
          <Box mt={34}>
            <Text className={classes.author}>{props.testimonies[active].author},</Text>
            <Text className={classes.company}>{props.testimonies[active].company}</Text>
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
      </Container>
    </Box>
  );
};
