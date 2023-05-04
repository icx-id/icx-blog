import { Box, Button, Container, Flex, Image, Text, rem } from '@mantine/core';
import React from 'react';

export const KycSuccessSubmit: React.FC = () => {
  return (
    <Box bg="#EEFFF2" h="80vh" py={rem(50)}>
      <Container h="100%">
        <Flex
          bg="#FFF"
          w="100%"
          px="25%"
          h="100%"
          py={rem(50)}
          style={{ borderRadius: rem(8) }}
          direction="column"
          justify="center"
          align="center">
          <Image
            withPlaceholder
            alt="icon-success"
            style={{ width: rem(160), height: rem(160) }}
            fit="contain"
            src="/img/icons/ic-success-submit.svg"
          />
          <Text weight="600" size={rem(18)} mt={rem(30)}>
            Pendaftaran berhasil
          </Text>
          <Text weight="300" size={rem(14)} w={rem(300)} align="center" mt={rem(10)} mb={rem(80)}>
            Silahkan lanjutkan proses verifikasi akun untuk dapat mulai berinvestasi.
          </Text>
          <Button style={{ backgroundColor: '#00C48F' }} w="100%" mt={rem(10)} radius={rem(15)}>
            Kembali ke Homepage
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
