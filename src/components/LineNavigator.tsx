import React, { FC } from 'react';
import { Box, Group, MediaQuery, createStyles } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { LineNavigatorProps } from './types';

const useStyles = createStyles(theme => ({
  iconWrapper: {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 100ms linear',
  },

  lightmode: {
    width: 40,
    height: 40,
    border: '1px solid #EEE7E7',
  },

  darkmode: {
    backgroundColor: '#292929 !important',
  },

  big: {
    [theme.fn.smallerThan('md')]: {
      width: 55,
      height: 55,
    },
  },

  default: {
    [theme.fn.smallerThan('md')]: {
      width: 32,
      height: 32,
    },
  },

  active: {
    cursor: 'pointer',
    backgroundColor: 'initial',
    ':hover': {
      backgroundColor: 'lightgrey',
    },
  },

  inactive: {
    cursor: 'default',
    backgroundColor: 'grey',
    ':hover': {
      backgroundColor: 'grey',
    },
  },
}));

export const LineNavigator: FC<LineNavigatorProps<unknown>> = ({
  data,
  active,
  onClickPrev,
  onClickNext,
  darkMode,
  big,
}) => {
  const { classes } = useStyles();

  return (
    <Group spacing={32} pt={32}>
      <Group spacing={12}>
        <Box
          className={`${classes.iconWrapper} ${darkMode ? classes.darkmode : classes.lightmode} ${
            big ? classes.big : classes.default
          } ${active > 0 ? classes.active : classes.inactive}`}
          onClick={onClickPrev}>
          <IconChevronLeft
            size={big ? 34 : 24}
            color={active > 0 ? (darkMode ? '#fff' : '#000') : 'lightgrey'}
          />
        </Box>
        <Box
          className={`${classes.iconWrapper} ${darkMode ? classes.darkmode : classes.lightmode} ${
            big ? classes.big : classes.default
          } ${active < data.length - 1 ? classes.active : classes.inactive}`}
          onClick={onClickNext}>
          <IconChevronRight
            size={big ? 34 : 24}
            color={active < data.length - 1 ? (darkMode ? '#fff' : '#000') : 'lightgrey'}
          />
        </Box>
      </Group>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Group spacing={0} maw={300} noWrap>
          {data.map((_: any, index: any) => (
            <Box
              key={index.toString()}
              sx={{
                height: '4px',
                width: `calc(300px / ${data.length})`,
                backgroundColor: active === index ? '#00C48F' : '#C1FFEE',
              }}
            />
          ))}
        </Group>
      </MediaQuery>
    </Group>
  );
};
