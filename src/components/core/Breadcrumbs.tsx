import React, { FC } from 'react';
import {
  Breadcrumbs as MantineBreadcrumbs,
  SpacingValue,
  SystemProp,
  Text,
  createStyles,
} from '@mantine/core';
import { BreadcrumbItem } from '../types';
import { Link } from './Link';

// -------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '.mantine-Breadcrumbs-separator': {
      marginLeft: 4,
      marginRight: 4,
    },
  },
}));

// -------------------------------------- components

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  pt?: SystemProp<SpacingValue>;
  pb?: SystemProp<SpacingValue>;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, pt, pb }) => {
  const { classes } = useStyles();

  return (
    <MantineBreadcrumbs separator=">" className={classes.root} pt={pt} pb={pb}>
      {items.map(item =>
        item.href ? (
          <Link key={item.label} to={item.href} color="#868e96" fw={400}>
            <Text fz={{ base: 14, md: 16 }} fw={400} lh="20px">
              {item.label}
            </Text>
          </Link>
        ) : (
          <Text key={item.label} fz={{ base: 14, md: 16 }} fw={600} lh="20px" color="brand">
            {item.label}
          </Text>
        ),
      )}
    </MantineBreadcrumbs>
  );
};
