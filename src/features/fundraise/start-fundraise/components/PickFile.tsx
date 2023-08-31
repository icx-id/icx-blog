import { FileButton, Flex, Text, UnstyledButton, rem } from '@mantine/core';
import { IconUpload, IconCamera } from '@tabler/icons-react';
import React, { PropsWithChildren, useState } from 'react';
import { InlineBadge } from '~/components';
import { ModalDukcapil } from './ModalDukcapil';
import { ModalPrivasiData } from './ModalPrivasiData';

interface PickFileProps {
  title: string;
  error?: string;
  handleOpenCamera?: () => void;
  withOpenCamera?: boolean;
  onChange: (file: File) => void;
  showFooter?: boolean;
  type: 'image' | 'file';
}

export const PickFile: React.FC<PropsWithChildren<PickFileProps>> = ({
  onChange,
  title,
  children,
  error,
  handleOpenCamera,
  withOpenCamera,
  showFooter = false,
  type,
}) => {
  const [openModalDukcapil, setOpenModalDukcapil] = useState<boolean>(false);
  const [openModalPrivasiData, setOpenModalPrivasiData] = useState<boolean>(false);

  return (
    <Flex
      mt={withOpenCamera ? '' : rem(40)}
      direction="column"
      justify="center"
      align="center"
      sx={theme => ({
        padding: '0 40px',
        [theme.fn.smallerThan('sm')]: { padding: '10px 0' },
      })}>
      <Text size={rem(28)} weight="500" align="center">
        {title}
      </Text>
      {children}
      {showFooter && (
        <>
          <Text style={{ textAlign: 'center', fontSize: rem(13), color: '#868E96' }}>
            Regulasi mengharuskan kami untuk meminta informasi ini untuk membukakan akun investasi
            Anda.
          </Text>
          <Flex gap="sm" mt={rem(14)} mb={rem(20)}>
            <InlineBadge
              handleClick={() => setOpenModalDukcapil(true)}
              fontWeight="light"
              size="xs">
              Dukcapil
            </InlineBadge>
            <InlineBadge
              handleClick={() => setOpenModalPrivasiData(true)}
              fontWeight="light"
              size="xs">
              Privasi Data
            </InlineBadge>
          </Flex>
        </>
      )}

      {error && (
        <Text size={rem(12)} color="red">
          {error}
        </Text>
      )}
      <Flex mt={withOpenCamera ? rem(20) : rem(40)} gap="md">
        <FileButton
          onChange={onChange}
          accept={type === 'image' ? 'image/png,image/jpeg' : 'application/pdf'}>
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
        {withOpenCamera && (
          <UnstyledButton
            onClick={handleOpenCamera}
            bg="#00C48F"
            w={rem(50)}
            h={rem(50)}
            style={{
              borderRadius: rem(8),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconCamera color="#FFF" size={rem(23)} />
          </UnstyledButton>
        )}
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
