import { Flex, Text, rem, Button, Stack, createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles(theme => ({
  image: {
    width: '80%',
    maxHeight: rem(300),
    objectFit: 'contain',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  content: {
    padding: '0 17%',
    [theme.fn.smallerThan('sm')]: {
      padding: '0',
    },
  },
}));

interface ResultPhotoProps {
  onConfirmPhoto: () => void;
  onRetakePhoto: () => void;
  resultImage: string;
  title: string;
}

export const ResultPhoto: React.FC<ResultPhotoProps> = ({
  onConfirmPhoto,
  onRetakePhoto,
  resultImage,
  title,
}) => {
  const { classes } = useStyles();
  return (
    <Flex px={rem(25)} justify="center" align="center" h="100%" direction="column">
      <img src={resultImage} alt="image-result" className={classes.image} />
      <Stack className={classes.content}>
        <Text align="center" mt={rem(30)} size={rem(18)}>
          {title}
        </Text>
        <Button onClick={onConfirmPhoto}>Konfirmasi Foto</Button>
        <Button onClick={onRetakePhoto}>Foto Ulang</Button>
      </Stack>
    </Flex>
  );
};
