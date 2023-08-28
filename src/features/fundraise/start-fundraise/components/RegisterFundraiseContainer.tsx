import { Box, Container, Grid, createStyles, rem } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const useStyles = createStyles(theme => ({
  root: {
    minHeight: rem(700),
    paddingTop: rem(120),
    paddingBottom: rem(50),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
    },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    [theme.fn.smallerThan('md')]: { height: '50%', marginTop: '30px' },
  },
  image: {
    objectFit: 'cover',
    borderTopLeftRadius: rem(8),
    borderBottomLeftRadius: rem(8),
    width: '100%',
    height: rem(600),
    [theme.fn.smallerThan('md')]: { borderRadius: rem(8), height: rem(300) },
  },
  imageHalf: {
    objectFit: 'contain',
    width: '90%',
    height: rem(250),
    borderRadius: rem(8),
    [theme.fn.smallerThan('md')]: { width: '100%' },
  },
}));

interface RegisterFundraiseContainerProps extends BreadcrumbsProps {
  bannerImage: string;
  bannerType?: 'full' | 'half';
  withBreadcrumbs?: boolean;
}

export const RegisterFundraiseContainer: React.FC<
  PropsWithChildren<RegisterFundraiseContainerProps>
> = ({
  children,
  bannerImage,
  bannerType = 'full',
  withBreadcrumbs = false,
  currentStep,
  totalStep,
  goBack,
}) => {
  const { classes } = useStyles();
  const mobileScreen = useMediaQuery('(max-width: 820px)');
  return (
    <Box bg="#F8F8F8" className={classes.root}>
      <Container h="100%">
        {withBreadcrumbs && mobileScreen && (
          <Box>
            <Breadcrumbs currentStep={currentStep} totalStep={totalStep} goBack={goBack} />
          </Box>
        )}
        <Grid
          sx={{ height: '100%', borderRadius: rem(8) }}
          justify="center"
          align={bannerType === 'half' ? 'center' : 'flex-start'}
          gutter="none">
          <Grid.Col span={mobileScreen ? 12 : 6} className={classes.imageContainer}>
            <img
              src={bannerImage}
              alt="image-banner"
              className={bannerType === 'full' ? classes.image : classes.imageHalf}
            />
          </Grid.Col>
          <Grid.Col
            sx={theme => ({
              height: bannerType === 'half' ? '100%' : rem(600),
              padding: '40px 0',
              backgroundColor: '#FFF',
              borderRadius: '8px',
              [theme.fn.smallerThan('md')]: {
                padding: withBreadcrumbs ? '15px 0' : '30px 0',
                backgroundColor: 'inherit',
              },
            })}
            span={mobileScreen ? 12 : 6}>
            {withBreadcrumbs && !mobileScreen && (
              <Box px={rem(20)} mb={rem(20)}>
                <Breadcrumbs currentStep={currentStep} totalStep={totalStep} />
              </Box>
            )}
            {children}
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
