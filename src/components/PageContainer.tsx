import React, { PropsWithChildren } from "react";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default PageContainer;
