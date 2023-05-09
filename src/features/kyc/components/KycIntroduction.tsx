import { Box, Button, Flex, Text, createStyles, rem } from '@mantine/core';
import React from 'react';
import { KycContainer } from './KycContainer';

const useStyles = createStyles(theme => ({
  button: {
    backgroundColor: '#00C48F',
    width: '70%',
    marginTop: rem(15),
    [theme.fn.smallerThan('sm')]: {
      width: '90%',
      marginTop: rem(80),
    },
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    padding: '0 2.5rem',
    [theme.fn.smallerThan('sm')]: {
      padding: '2rem 0 0 0',
      justifyContent: 'space-between',
    },
  },
}));

interface KycInroductionProps {
  onNextStep: () => void;
}

export const KycIntroduction: React.FC<KycInroductionProps> = ({ onNextStep }) => {
  const { classes } = useStyles();
  return (
    <KycContainer bannerImage="/img/kyc-banner.jpeg">
      <Flex className={classes.container}>
        <Box>
          <Text size={rem(28)} weight="500" align="center" mb={rem(5)}>
            Isi Biodata Pribadi
          </Text>
          <Text align="center" mb={rem(12)}>
            Biodata pribadi Anda diperlukan untuk membuka akun investasi
          </Text>
        </Box>
        <Button onClick={onNextStep} className={classes.button}>
          Selanjutnya
        </Button>
      </Flex>
    </KycContainer>
  );
};
