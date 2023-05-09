import { Modal, Text, ModalProps } from '@mantine/core';
import React from 'react';

export const ModalPrivasiData: React.FC<ModalProps> = ({ opened, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Data Dilindungi Sistem Keamanan" centered>
      <Text size="sm">
        Kerahasiaan data akan dijaga dan hanya digunakan untuk verifikasi sesuai regulasi hukum yang
        berlaku.
      </Text>
    </Modal>
  );
};
