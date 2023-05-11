import { Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';
import { PinWrapper } from './PinWrapper';
import { useCreatePinMutation } from '../api/useCreatePinMutation';

interface CreatePinProps {
  onSubmitSuccess: () => void;
}

export const CreatePin: React.FC<CreatePinProps> = ({ onSubmitSuccess }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isErrorConfirmPin, setIsErrorConfirmPin] = useState<boolean>(false);
  const [pin, setPin] = useState<string>('');
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [activeState, setActiveState] = useState<string>('CREATE-PIN');
  const { mutateAsync: createPin, isLoading } = useCreatePinMutation();

  const onChangePin = (value: string) => {
    setPin(value);
  };

  const onCompletePin = () => {
    setActiveState('CONFIRM-PIN');
  };

  const onChangeConfirmPin = (value: string) => {
    setConfirmPin(value);
  };

  const onCompleteConfirmPin = async () => {
    if (confirmPin !== pin) {
      setIsErrorConfirmPin(true);
      return notifications.show({
        message: 'PIN yang kamu masukkan salah',
        color: 'red',
      });
    }
    try {
      await createPin(pin);
      onSubmitSuccess();
      notifications.show({
        message: 'PIN berhasil dibuat',
      });
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;
      if (errors) {
        return notifications.show({
          message: errors.join(' '),
          color: 'red',
        });
      }
    }
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setPin('');
        setIsError(false);
      }, 1000);
    }
  }, [isError]);

  useEffect(() => {
    if (isErrorConfirmPin) {
      setTimeout(() => {
        setConfirmPin('');
        setIsErrorConfirmPin(false);
      }, 1000);
    }
  }, [isErrorConfirmPin]);

  return (
    <Box>
      {activeState === 'CREATE-PIN' && (
        <PinWrapper
          otpValue={pin}
          onChange={onChangePin}
          onComplete={onCompletePin}
          isError={isError}
          title="Buat PIN"
          description="Harap tentukan kode PIN untuk melindungi semua kegiatan Anda di masa mendatang"
        />
      )}
      {activeState === 'CONFIRM-PIN' && (
        <PinWrapper
          otpValue={confirmPin}
          loading={isLoading}
          onChange={onChangeConfirmPin}
          onComplete={onCompleteConfirmPin}
          isError={isErrorConfirmPin}
          title="Konfirmasi PIN"
          description="Harap tentukan kode PIN untuk melindungi semua kegiatan Anda di masa mendatang"
        />
      )}
    </Box>
  );
};
