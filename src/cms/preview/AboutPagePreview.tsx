import React from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";
import { About } from "../../features/about";
import { AboutDataType } from "../../features/about/types";
import PageContainer from "../../components/PageContainer";

const AboutPagePreview: React.FC<PreviewTemplateComponentProps> = ({
  entry,
  widgetFor,
}) => {
  const data: AboutDataType = {
    title: entry.getIn(["data", "title"]),
    banner: entry.getIn(["data", "banner"]),
    subtitleLeft: entry.getIn(["data", "subtitleLeft"]),
    subtitleRight: entry.getIn(["data", "subtitleRight"]),
    ourStories: entry.getIn(["data", "ourStories"]),
  };

  return (
    <PageContainer>
      <About data={data} />
    </PageContainer>
  );
};

export default AboutPagePreview;
