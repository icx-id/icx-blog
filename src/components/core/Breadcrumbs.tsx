import React, { FC } from 'react';
import { Breadcrumbs as MantineBreadcrumbs, Text, createStyles } from '@mantine/core';
import { BreadcrumbItem } from '../types';
import { Link } from './Link';

// -------------------------------------- styles

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 24,
    paddingBottom: 24,

    '.mantine-Breadcrumbs-separator': {
      marginLeft: 4,
      marginRight: 4,
    },

    [theme.fn.smallerThan('md')]: {
      paddingTop: 16,
      paddingBottom: 16,
    },
  },
}));

// -------------------------------------- components

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  const { classes } = useStyles();

  return (
    <MantineBreadcrumbs separator=">" className={classes.root}>
      {items.map(item =>
        item.href ? (
          <Link key={item.label} to={item.href} color="#868e96" fw={400}>
            <Text size={16} fw={400} lh="20px">
              {item.label}
            </Text>
          </Link>
        ) : (
          <Text key={item.label} size={16} fw={600} lh="20px" color="brand">
            {item.label}
          </Text>
        ),
      )}
    </MantineBreadcrumbs>
  );
};
