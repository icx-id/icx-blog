import React, { PropsWithChildren } from 'react';
import { ApiClientProvider } from '~/providers/ApiClientProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosManager } from '~/lib/axios';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const queryClient = new QueryClient();
const axiosManager = new AxiosManager();

export const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApiClientProvider axiosManager={axiosManager}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: 'Inter, Open Sans, sans serif',
            colors: {
              brand: [
                '#dafff7',
                '#adffea',
                '#7effdd',
                '#4dffcf',
                '#24ffc1',
                '#11e6a7',
                '#00b382',
                '#00805d',
                '#004e37',
                '#001c12',
              ],
            },
            primaryColor: 'brand',
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 720,
                    sm: 960,
                    md: 1140,
                    lg: 1320,
                    ll: 1440,
                    xl: 1920,
                  },
                },
                styles: theme => {
                  return {
                    root: {
                      padding: '0 4em',
                      [theme.fn.smallerThan('md')]: {
                        padding: '0 1.5em',
                      },
                    },
                  };
                },
              },
              Button: {
                defaultProps: {
                  sx: {
                    ':active': {
                      transform: 'none',
                      opacity: 0.9,
                    },
                    transition: 'opacity 100ms linear',
                    fontWeight: 500,
                  },
                },
              },
              ActionIcon: {
                defaultProps: {
                  sx: {
                    ':active': {
                      transform: 'none',
                      opacity: 0.9,
                    },
                    transition: 'opacity 100ms linear',
                  },
                },
              },
            },
          }}>
          <Notifications position="top-right" />
          {children}
        </MantineProvider>
      </QueryClientProvider>
    </ApiClientProvider>
  );
};
