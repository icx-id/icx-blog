import React from 'react';
import { Text, Box, Stack, MediaQuery, Grid, Image, Flex } from '@mantine/core';
import { AboutContainer } from './AboutContainer';

import SummaryVideo from '~/images/summary-video.svg';
import PlayIcon from '~/images/play-icon.png';

const BACKGROUND_COLOR = '#131E2C';

type SummarySectionProps = {
  onOpenVideo: () => void;
};

export const SummarySection: React.FC<SummarySectionProps> = ({ onOpenVideo }) => {
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ paddingTop: 'calc(8em + 64px)' }}>
        <MediaQuery smallerThan="md" styles={{ paddingTop: 'calc(10em + 64px)' }}>
          <MediaQuery smallerThan="lg" styles={{ paddingTop: 'calc(14em + 80px)' }}>
            <Stack
              pos="relative"
              justify="space-between"
              bg={BACKGROUND_COLOR}
              sx={{ color: 'white' }}
              pt="calc(16em + 80px)"
              mt="-12%"
              mih="100vh">
              <MediaQuery smallerThan="md" styles={{ width: '80vh', height: '80vh' }}>
                <Box
                  sx={{
                    background:
                      'linear-gradient(149.92deg, #CEEFF3 36.83%, rgba(202, 235, 239, 0.98) 40.49%, rgba(192, 223, 228, 0.93) 44.88%, rgba(174, 204, 209, 0.83) 49.27%, rgba(150, 176, 183, 0.7) 53.66%, rgba(119, 142, 150, 0.54) 58.78%, rgba(81, 99, 110, 0.33) 63.17%, rgba(36, 50, 63, 0.1) 68.3%, rgba(19, 30, 44, 0) 70.49%)',
                    transform: 'rotate(-180deg)',
                    position: 'absolute',
                    width: '100vw',
                    height: '100vw',
                    // zIndex: -1,
                    // left: '132.02%',
                    right: '-40%',
                    bottom: '-55%',
                    borderRadius: '50%',
                  }}
                />
              </MediaQuery>
              <AboutContainer>
                <MediaQuery smallerThan="sm" styles={{ fontSize: '1.5em', maxWidth: 480 }}>
                  <MediaQuery smallerThan="md" styles={{ fontSize: '1.7em', maxWidth: 480 }}>
                    <Stack spacing={0} fz="40px" fw="bold">
                      <Text>
                        We Are Providing You
                        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                          <br />
                        </MediaQuery>{' '}
                        With The New Way Of Investing
                        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                          <br />
                        </MediaQuery>{' '}
                        To The Businesses You Trust
                      </Text>
                    </Stack>
                  </MediaQuery>
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ fontSize: '1em' }}>
                  <MediaQuery smallerThan="md" styles={{ fontSize: '1.2em' }}>
                    <Grid fz="20px" mt="40px" align="center">
                      <Grid.Col sm={12} md={5}>
                        <Text maw="550px">
                          Our platform facilitates curated private companies in raising funds from
                          investors and exchanges of stocks, becoming the bridge between businesses
                          and people.
                        </Text>
                      </Grid.Col>
                      <MediaQuery smallerThan="md" styles={{ marginTop: '1.5em' }}>
                        <Grid.Col sm={12} md={6} orderSm={0} offsetMd={1}>
                          <Text maw="550px">
                            With ICX, we are striving to empower common investor and private
                            businesses to grow beyond, together.
                          </Text>
                        </Grid.Col>
                      </MediaQuery>
                    </Grid>
                  </MediaQuery>
                </MediaQuery>
              </AboutContainer>
              <AboutContainer>
                <MediaQuery
                  smallerThan="sm"
                  styles={{ textAlign: 'left', fontSize: '14px', paddingBottom: 0 }}>
                  <MediaQuery
                    smallerThan="md"
                    styles={{ textAlign: 'left', fontSize: '18px', paddingBottom: 16 }}>
                    <Text mb="lg" ta="center" fz="20px">
                      Learn more about ICX
                    </Text>
                  </MediaQuery>
                </MediaQuery>
              </AboutContainer>
            </Stack>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <Flex pos="relative" justify="center">
        <Box sx={{ zIndex: -1 }} pos="absolute" bg={BACKGROUND_COLOR} h="40%" top={0} w="100%" />
        <Box sx={{ zIndex: 0 }} pos="absolute" bg="white" h="60%" bottom={0} w="100%" />
        <MediaQuery smallerThan="sm" styles={{ maxWidth: '95vw' }}>
          <Image maw="60vw" src={SummaryVideo} sx={{ cursor: 'pointer' }} onClick={onOpenVideo} />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ maxWidth: 48 }}>
          <Image
            maw={80}
            src={PlayIcon}
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            onClick={onOpenVideo}
          />
        </MediaQuery>
      </Flex>
    </>
  );
};
