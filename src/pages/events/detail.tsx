import React, { useRef, useState } from 'react';
import { PageProps } from 'gatsby';
import { Container, Box, Text, Image } from '@mantine/core';
import Carousel from 'nuka-carousel';

const EventsPage: React.FC<PageProps> = () => {
  const images = ['/img/sample.png', '/img/sample.png', '/img/sample.png'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container sx={{ height: '100%' }} size="lg" pt={40}>
      <Box sx={{ minHeight: '100vh' }} pb="lg">
        <Text color="#868E96" fz={16} pb="xl">
          Home &gt; ICX Connect &gt;{' '}
          <span style={{ color: '#00C48F' }}>How To Become A Mindful Investor</span>
        </Text>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '55%' }}>
            <Carousel slideIndex={activeIndex} withoutControls>
              {images.map(image => {
                return <Image src={image} fit="cover" />;
              })}
            </Carousel>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {images.map((_, index) => {
                return (
                  <Box
                    sx={{
                      marginTop: '1.5rem',
                      height: '13px',
                      width: '13px',
                      position: 'relative',
                      ':not(:last-child)': {
                        marginRight: '10px',
                      },
                      ':hover': {
                        cursor: 'pointer',
                      },
                      backgroundColor: activeIndex === index ? '#00C48F' : '#FFF',
                      borderRadius: '100%',
                      border: '1px solid #00C48F',
                    }}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width: '40%',
              marginLeft: '5%',
              border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Box>
              <Text>How To Become A Mindful Investor</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EventsPage;
