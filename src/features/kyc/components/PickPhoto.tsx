import { Box, Chip, FileButton, Flex, Text, UnstyledButton, rem } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import React, { PropsWithChildren } from 'react';

interface PickPhotoProps {
  onChange: (file: File) => void;
  title: string;
}

export const PickPhoto: React.FC<PropsWithChildren<PickPhotoProps>> = ({
  onChange,
  title,
  children,
}) => {
  return (
    <Flex direction="column" h="100%" justify="center" align="center" px={rem(40)}>
      <Text size={rem(28)} weight="500" align="center">
        {title}
      </Text>
      {children}
      <Text style={{ textAlign: 'center', fontSize: rem(13), color: '#868E96' }}>
        Regulasi mengharuskan kami untuk meminta informasi ini untuk membukakan akun investasi Anda.
      </Text>
      <Flex gap="sm" mt={rem(14)} mb={rem(20)}>
        <Chip variant="filled" size="xs">
          Dukcapil
        </Chip>
        <Chip variant="filled" size="xs">
          Privasi Data
        </Chip>
      </Flex>
      <Box mt={rem(20)}>
        <FileButton onChange={onChange} accept="image/png,image/jpeg">
          {props => (
            <UnstyledButton
              bg="#00C48F"
              w={rem(50)}
              h={rem(50)}
              style={{
                borderRadius: rem(8),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              {...props}>
              <IconUpload color="#FFF" size={rem(23)} />
            </UnstyledButton>
          )}
        </FileButton>
      </Box>
    </Flex>
  );
};
