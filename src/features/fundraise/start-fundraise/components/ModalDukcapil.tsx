import { Modal, Text, ModalProps } from '@mantine/core';
import React from 'react';

export const ModalDukcapil: React.FC<ModalProps> = ({ opened, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Validasi KTP oleh Dukcapil" centered>
      <Text size="sm">
        Proses validasi KTP akan diproses oleh provider Privy E-KYC untuk selanjutnya diteruskan ke
        Dukcapil.
      </Text>
    </Modal>
  );
};
