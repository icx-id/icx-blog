import { Box, Button, Container, Flex, Text, createStyles, rem } from '@mantine/core';
import React from 'react';
import { Link } from '~/components';

const useStyles = createStyles(theme => ({
  root: {
    backgroundColor: '#F4F4F4',
    height: '80vh',
    paddingTop: rem(120),
    paddingBottom: rem(50),
    [theme.fn.smallerThan('sm')]: {
      backgroundColor: '#FFF',
    },
  },
  image: {
    objectFit: 'contain',
    width: rem(160),
    height: rem(160),
    [theme.fn.smallerThan('sm')]: { width: rem(100) },
  },
  content: {
    width: '100%',
    padding: '50px 25%',
    height: '100%',
    borderRadius: rem(8),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      padding: 0,
    },
  },
}));

export const RegisterFundraiseSuccess: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container h="100%">
        <Flex className={classes.content}>
          <img
            alt="icon-success"
            className={classes.image}
            src="/img/icons/ic-success-submit.svg"
          />
          <Text weight="600" size={rem(18)} mt={rem(30)}>
            Pendaftaran berhasil
          </Text>
          <Text weight="300" size={rem(14)} w={rem(300)} align="center" mt={rem(10)} mb={rem(80)}>
            Silahkan lanjutkan proses verifikasi akun untuk dapat mulai berinvestasi.
          </Text>

          <Button style={{ backgroundColor: '#00C48F' }} w="100%" mt={rem(10)}>
            <Link to="/" color="#fff">
              Kembali ke Homepage
            </Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
