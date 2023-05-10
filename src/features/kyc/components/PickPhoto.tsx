import { FileButton, Flex, Text, UnstyledButton, rem } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import React, { PropsWithChildren, useState } from 'react';
import { InlineBadge } from '~/components';
import { ModalDukcapil } from './ModalDukcapil';
import { ModalPrivasiData } from './ModalPrivasiData';

interface PickPhotoProps {
  onChange: (file: File) => void;
  title: string;
  error?: string;
}

export const PickPhoto: React.FC<PropsWithChildren<PickPhotoProps>> = ({
  onChange,
  title,
  children,
  error,
}) => {
  const [openModalDukcapil, setOpenModalDukcapil] = useState<boolean>(false);
  const [openModalPrivasiData, setOpenModalPrivasiData] = useState<boolean>(false);

  return (
    <Flex
      direction="column"
      h="100%"
      justify="center"
      align="center"
      sx={theme => ({ padding: '0 40px', [theme.fn.smallerThan('sm')]: { padding: '10px 0' } })}>
      <Text size={rem(28)} weight="500" align="center">
        {title}
      </Text>
      {children}
      <Text style={{ textAlign: 'center', fontSize: rem(13), color: '#868E96' }}>
        Regulasi mengharuskan kami untuk meminta informasi ini untuk membukakan akun investasi Anda.
      </Text>
      <Flex gap="sm" mt={rem(14)} mb={rem(20)}>
        <InlineBadge handleClick={() => setOpenModalDukcapil(true)} fontWeight="light" size="xs">
          Dukcapil
        </InlineBadge>
        <InlineBadge handleClick={() => setOpenModalPrivasiData(true)} fontWeight="light" size="xs">
          Privasi Data
        </InlineBadge>
      </Flex>
      {error && (
        <Text size={rem(12)} color="red">
          {error}
        </Text>
      )}
      <Flex mt={rem(20)} gap="md">
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
      </Flex>
      <ModalDukcapil
        opened={openModalDukcapil}
        onClose={() => setOpenModalDukcapil(!openModalDukcapil)}
      />
      <ModalPrivasiData
        opened={openModalPrivasiData}
        onClose={() => setOpenModalPrivasiData(!openModalPrivasiData)}
      />
    </Flex>
  );
};
