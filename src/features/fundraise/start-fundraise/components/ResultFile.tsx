import { Flex, Text, rem, Button, Stack, createStyles } from '@mantine/core';
import React from 'react';
import { IconFile } from '@tabler/icons-react';

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

interface ResultFileProps {
  onConfirmFile: () => void;
  onRetakePhoto?: () => void;
  resultFile: string;
  title?: string;
  type: 'file' | 'image';
}

export const ResultFile: React.FC<ResultFileProps> = ({
  onConfirmFile,
  onRetakePhoto,
  resultFile,
  title,
  type,
}) => {
  const { classes } = useStyles();
  const isFile = type === 'file';

  return (
    <Flex
      px={rem(25)}
      justify={isFile ? 'flex-start' : 'center'}
      mt={isFile ? rem(40) : ''}
      align="center"
      h="100%"
      direction="column">
      {isFile ? (
        <Flex align="center" gap="5px">
          <IconFile />
          <Text size="sm">{resultFile}</Text>
        </Flex>
      ) : (
        <img src={resultFile} alt="image-result" className={classes.image} />
      )}
      <Stack className={classes.content} mt={rem(30)}>
        {title && (
          <Text align="center" size={rem(18)}>
            {title}
          </Text>
        )}
        <Button onClick={onConfirmFile}>Konfirmasi {isFile ? 'File' : 'Photo'}</Button>
        {!isFile && <Button onClick={onRetakePhoto}>Foto Ulang</Button>}
      </Stack>
    </Flex>
  );
};
