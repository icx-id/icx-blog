import React, { PropsWithChildren } from 'react';
import { ApiClientProvider } from '~/providers/ApiClientProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosManager } from '~/lib/axios';

const queryClient = new QueryClient();
const axiosManager = new AxiosManager();

export const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApiClientProvider axiosManager={axiosManager}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientProvider>
  );
};
