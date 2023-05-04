import { Button, Flex, Text, createStyles, rem } from '@mantine/core';
import React from 'react';
import { KycContainer } from './KycContainer';

const useStyles = createStyles(() => ({
  button: {
    backgroundColor: '#00C48F',
    width: '60%',
  },
}));

interface KycInroductionProps {
  onNextStep: () => void;
}

export const KycIntroduction: React.FC<KycInroductionProps> = ({ onNextStep }) => {
  const { classes } = useStyles();
  return (
    <KycContainer bannerImage="/img/kyc-banner.jpeg">
      <Flex direction="column" h="100%" justify="center" align="center" px={rem(40)}>
        <Text size={rem(28)} weight="500" align="center" mb={rem(5)}>
          Isi Biodata Pribadi
        </Text>
        <Text align="center" mb={rem(12)}>
          Biodata pribadi Anda diperlukan untuk membuka akun investasi
        </Text>
        <Button onClick={onNextStep} className={classes.button}>
          Selanjutnya
        </Button>
      </Flex>
    </KycContainer>
  );
};
