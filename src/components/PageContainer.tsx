import React, { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Inter, Open Sans, sans serif",
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default PageContainer;
