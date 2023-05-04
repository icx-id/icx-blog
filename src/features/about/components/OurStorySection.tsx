import { AspectRatio, Box, Flex, Grid, Image, MediaQuery, Text, Title } from '@mantine/core';
import React from 'react';
import { AboutContainer } from './AboutContainer';
import ourStory from '~/images/our-story.svg';

export const OurStorySection = () => {
  return (
    <MediaQuery smallerThan="md" styles={{ paddingTop: '40px' }}>
      <Box sx={{ paddingTop: '140px', position: 'relative', background: 'white' }}>
        <AboutContainer>
          <MediaQuery smallerThan="md" styles={{ fontSize: '1.25em' }}>
            <Text fw="bold" sx={{ fontSize: '2.5em' }}>
              Our Story
            </Text>
          </MediaQuery>
        </AboutContainer>

        <MediaQuery smallerThan="sm" styles={{ marginTop: '0' }}>
          <Grid mt="2.5em" gutter="xl">
            <Grid.Col md={10} sm={12}>
              <AboutContainer>
                <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                  <Grid sx={{ borderTop: '2px solid #E0E5E6', padding: '2em 0' }}>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        borderRight: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col
                        md={2}
                        sm={12}
                        sx={{
                          borderRight: '2px solid #E0E5E6',
                          paddingLeft: 0,
                        }}>
                        <Text sx={{ fontSize: '1.25em', fontWeight: 'bold' }}>2019</Text>
                      </Grid.Col>
                    </MediaQuery>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        padding: '0.5em 0',
                        paddingLeft: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col md={10} sm={12} sx={{ paddingLeft: '2.5em' }}>
                        LandX was launched as a securities crowdfunding platform
                      </Grid.Col>
                    </MediaQuery>
                  </Grid>
                </MediaQuery>
                <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                  <Grid sx={{ borderTop: '2px solid #E0E5E6', padding: '2em 0' }}>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        borderRight: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col
                        md={2}
                        sm={12}
                        sx={{
                          borderRight: '2px solid #E0E5E6',
                          paddingLeft: 0,
                        }}>
                        <Text sx={{ fontSize: '1.25em', fontWeight: 'bold' }}>2020</Text>
                      </Grid.Col>
                    </MediaQuery>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        padding: '0.5em 0',
                        paddingLeft: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col md={10} sm={12} sx={{ paddingLeft: '2.5em' }}>
                        Received Fintech Equity Crowdfunding(ECF) license from The Indonesia
                        Financial Services Authority or commonly known as OJK
                      </Grid.Col>
                    </MediaQuery>
                  </Grid>
                </MediaQuery>
                <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                  <Grid sx={{ borderTop: '2px solid #E0E5E6', padding: '2em 0' }}>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        borderRight: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col
                        md={2}
                        sm={12}
                        sx={{
                          borderRight: '2px solid #E0E5E6',
                          paddingLeft: 0,
                        }}>
                        <Text sx={{ fontSize: '1.25em', fontWeight: 'bold' }}>2021</Text>
                      </Grid.Col>
                    </MediaQuery>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        padding: '0.5em 0',
                        paddingLeft: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col md={10} sm={12} sx={{ paddingLeft: '2.5em' }}>
                        Reached a total of 150 billion IDR fundraised in Equity
                      </Grid.Col>
                    </MediaQuery>
                  </Grid>
                </MediaQuery>
                <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                  <Grid sx={{ borderTop: '2px solid #E0E5E6', padding: '2em 0' }}>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        borderRight: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col
                        md={2}
                        sm={12}
                        sx={{
                          borderRight: '2px solid #E0E5E6',
                          paddingLeft: 0,
                        }}>
                        <Text sx={{ fontSize: '1.25em', fontWeight: 'bold' }}>2022</Text>
                      </Grid.Col>
                    </MediaQuery>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        padding: '0.5em 0',
                        paddingLeft: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col md={10} sm={12} sx={{ paddingLeft: '2.5em' }}>
                        Awarded the “Best Crowdfunding Platform” by ALUDI & Dunia Fintech while
                        reaching more than 89.000 users and helping to raise an addition of 1750+ in
                        employment
                      </Grid.Col>
                    </MediaQuery>
                  </Grid>
                </MediaQuery>
                <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                  <Grid sx={{ borderTop: '2px solid #E0E5E6', padding: '2em 0' }}>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        borderRight: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col
                        md={2}
                        sm={12}
                        sx={{
                          borderRight: '2px solid #E0E5E6',
                          paddingLeft: 0,
                        }}>
                        <Text sx={{ fontSize: '1.25em', fontWeight: 'bold' }}>2023</Text>
                      </Grid.Col>
                    </MediaQuery>
                    <MediaQuery
                      smallerThan="md"
                      styles={{
                        padding: '0.5em 0',
                        paddingLeft: '0',
                        borderBottom: '2px solid #E0E5E6',
                      }}>
                      <Grid.Col md={10} sm={12} sx={{ paddingLeft: '2.5em' }}>
                        LandX rebranded themselves in to Indonesia Crowdfunding Exchange(ICX)
                      </Grid.Col>
                    </MediaQuery>
                  </Grid>
                </MediaQuery>
              </AboutContainer>
            </Grid.Col>
            <Grid.Col md={3} sm={12}>
              <Flex h="100%" align="center" justify="center" pos="relative">
                <MediaQuery largerThan="0" styles={{ display: 'none' }}>
                  <Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '70%',
                        background: 'black',
                        bottom: 0,
                      }}
                    />
                    <Box px="1.5em">
                      <img
                        src={ourStory}
                        style={{ objectFit: 'cover', flexShrink: 0, height: '100%' }}
                      />
                    </Box>
                  </Box>
                </MediaQuery>
              </Flex>
            </Grid.Col>
          </Grid>
        </MediaQuery>
      </Box>
    </MediaQuery>
  );
};
