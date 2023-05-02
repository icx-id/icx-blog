import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { About } from '../../features/about';
import { AboutDataType } from '../../features/about/types';

const AboutPagePreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const data: AboutDataType = {
    title: entry.getIn(['data', 'title']),
    banner: entry.getIn(['data', 'banner']),
    subtitleLeft: entry.getIn(['data', 'subtitleLeft']),
    subtitleRight: entry.getIn(['data', 'subtitleRight']),
    ourStories: entry.getIn(['data', 'ourStories']),
  };

  return <About data={data} />;
};

export default AboutPagePreview;
