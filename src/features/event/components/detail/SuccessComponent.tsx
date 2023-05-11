import React, { FC } from 'react';
import { Box, Button, Container, Image, MediaQuery, Stack, Text } from '@mantine/core';

import ThickCircleIcon from '../../assets/ic-thick-circle.svg';
import { Link } from '~/components';

export const SuccessComponent: FC = () => {
  return (
    <Stack spacing={0} align="center" w={400} h={{ base: '100%', md: 'auto' }}>
      <Image src={ThickCircleIcon} maw={{ base: 120, md: 200 }} mah={{ base: 120, md: 200 }} />
      <Box mt={72}>
        <Text ta="center" fz={{ base: 20, md: 24 }} fw={600} lh={{ base: '24px', md: '32px' }}>
          Pendaftaran Berhasil!
        </Text>
        <Text
          mt={24}
          ta="center"
          fz={{ base: 12, md: 14 }}
          fw={400}
          lh={{ base: '15px', md: '20px' }}
          color="#868e96">
          Undangan akan tampil di menu
        </Text>
        <Text
          ta="center"
          fz={{ base: 12, md: 14 }}
          fw={400}
          lh={{ base: '15px', md: '20px' }}
          color="#868e96">
          My Event dan akan dikirimkan ke email Anda
        </Text>
      </Box>

      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Link to="/icx-connect">
          <Button fullWidth mt={24}>
            Back to ICX Connect
          </Button>
        </Link>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Container w="100%" pos="absolute" bottom={0} mb={32}>
          <Link to="/icx-connect">
            <Button fullWidth mt={24}>
              Back to ICX Connect
            </Button>
          </Link>
        </Container>
      </MediaQuery>
    </Stack>
  );
};
