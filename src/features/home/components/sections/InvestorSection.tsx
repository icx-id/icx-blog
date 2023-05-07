import React, { FC } from 'react';
import { InvestorSectionProps } from '../../types';
import {
  Box,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  createStyles,
  em,
  getBreakpointValue,
} from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMediaQuery } from '@mantine/hooks';

// ------------------------------------------ styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 176,
    [theme.fn.smallerThan('md')]: {
      paddingTop: 96,
    },
  },

  title: {
    maxWidth: 700,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '54px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.fn.smallerThan('md')]: {
      fontSize: 24,
      lineHeight: '32px',
      maxWidth: 400,
    },
  },

  subtitle: {
    maxWidth: 650,
    marginTop: 32,
    fontSize: 22,
    fontWeight: 400,
    lineHeight: '32px',
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      marginTop: 24,
      fontSize: 16,
      lineHeight: '20px',
      maxWidth: 400,
    },
  },

  gridWrapper: {
    marginTop: 96,
    [theme.fn.smallerThan('md')]: {
      marginTop: 64,
    },
  },

  textCount: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: '48px',
    color: '#fff',
    [theme.fn.smallerThan('lg')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 20,
      lineHeight: '24px',
    },
  },

  textLabel: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '29px',
    color: '#fff',
    [theme.fn.smallerThan('md')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },

  groupWrapper: {
    position: 'relative',
  },

  bgImage: {
    [theme.fn.smallerThan('md')]: {
      width: '100%',
      height: 200,
      borderRadius: '10px',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      height: 114,
      borderRadius: '10px',
    },
  },

  textWrapper: {
    position: 'absolute',
    left: 40,
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));

// ------------------------------------------ components

export const InvestorSection: FC<InvestorSectionProps> = ({ ...props }) => {
  const { classes, theme } = useStyles();

  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`,
  );
  const isSmallMobile = useMediaQuery(`(max-width: ${em(500)})`);

  return (
    <Box className={classes.root}>
      <Container size="ll">
        <Stack spacing={0} align="center">
          <Text className={classes.title}>{props.title}</Text>
          <Text className={classes.subtitle}>{props.subtitle}</Text>
        </Stack>

        <Grid gutter={isMobile ? 16 : 80} className={classes.gridWrapper}>
          <Grid.Col xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box className={classes.groupWrapper}>
              {/* <GatsbyImage
                image={props.fundraising.background.childImageSharp.gatsbyImageData}
                alt="fundraising"
                className={classes.bgImage}
              /> */}
              <Box
                sx={{
                  [theme.fn.smallerThan('md')]: {
                    maxHeight: 160,
                    overflow: 'hidden',
                    borderRadius: isSmallMobile ? '10px' : '40px',
                  },
                }}>
                <Image src={props.fundraising.background} />
              </Box>
              <Stack spacing={0} className={classes.textWrapper}>
                <Text className={classes.textCount}>{props.fundraising.count}</Text>
                <Text className={classes.textLabel}>{props.fundraising.label}</Text>
              </Stack>
            </Box>
          </Grid.Col>
          <Grid.Col xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box className={classes.groupWrapper}>
              {/* <GatsbyImage
                image={props.employment.background.childImageSharp.gatsbyImageData}
                alt="employment"
                className={classes.bgImage}
              /> */}
              <Box
                sx={{
                  [theme.fn.smallerThan('md')]: {
                    maxHeight: 160,
                    overflow: 'hidden',
                    borderRadius: isSmallMobile ? '10px' : '40px',
                  },
                }}>
                <Image src={props.employment.background} />
              </Box>
              <Stack spacing={0} className={classes.textWrapper}>
                <Text className={classes.textCount}>{props.employment.count}</Text>
                <Text className={classes.textLabel}>{props.employment.label}</Text>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
