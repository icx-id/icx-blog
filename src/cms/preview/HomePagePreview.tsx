import React from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";
import PageContainer from "../../components/PageContainer";
import { Home } from "../../features/home";
import { HomeDataType } from "../../features/home/types";
// import AboutPage from "../../pages/about";

const HomePagePreview: React.FC<PreviewTemplateComponentProps> = ({
  entry,
  widgetFor,
}) => {
  const data: HomeDataType = {
    title: entry.getIn(["data", "title"]),
  };

  return (
    <PageContainer>
      <Home data={data} />
    </PageContainer>
  );
};

export default HomePagePreview;
