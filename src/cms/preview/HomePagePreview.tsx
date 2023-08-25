import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { Home } from '../../features/kyc/components/home';
import { HomeDataType } from '../../features/kyc/components/home/types';

const HomePagePreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const data: HomeDataType = {
    title: entry.getIn(['data', 'title']),
  };

  return <Home data={data} />;
};

export default HomePagePreview;
