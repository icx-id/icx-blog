import { Box, Container, Grid, createStyles, rem } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

const useStyles = createStyles(() => ({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#F9F9F9',
  },
  image: {
    objectFit: 'cover',
    borderTopLeftRadius: rem(8),
    borderBottomLeftRadius: rem(8),
    width: '100%',
    height: '100%',
  },
  imageHalf: {
    objectFit: 'contain',
    width: '90%',
    height: rem(250),
    borderRadius: rem(8),
  },
}));

interface KycContainerProps {
  bannerImage: string;
  bannerType?: 'full' | 'half';
}

export const KycContainer: React.FC<PropsWithChildren<KycContainerProps>> = ({
  children,
  bannerImage,
  bannerType = 'full',
}) => {
  const { classes } = useStyles();
  return (
    <Box bg="#EEFFF2" h="80vh" py={rem(50)}>
      <Container h="100%">
        <Grid
          style={{ backgroundColor: '#FFF', height: '100%', borderRadius: rem(8) }}
          gutter="none">
          <Grid.Col span={6} className={classes.imageContainer}>
            <img
              src={bannerImage}
              alt="image-banner"
              className={bannerType === 'full' ? classes.image : classes.imageHalf}
            />
          </Grid.Col>
          <Grid.Col span={6}>{children}</Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
