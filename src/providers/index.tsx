import React, { PropsWithChildren } from 'react';
import { ApiClientProvider } from '~/providers/ApiClientProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosManager } from '~/lib/axios';
import { MantineProvider } from '@mantine/core';

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
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 720,
                    sm: 960,
                    md: 1140,
                    lg: 1320,
                    xl: 1920,
                  },
                },
              },
            },
          }}>
          {children}
        </MantineProvider>
      </QueryClientProvider>
    </ApiClientProvider>
  );
};
