import React from 'react';
import { AboutDataType } from '../types';
import { Container, Text, Image } from '@mantine/core';

export const About: React.FC<{ data: null }> = ({ data }) => {
  // const { title, banner } = data;

  return (
    <>
      {/* add banner here */}

      <Container>
        {/* <Text>ICX - {title}</Text>
        <div>
          <Image src={banner} />
        </div> */}
      </Container>
    </>
  );
};

export default About;
