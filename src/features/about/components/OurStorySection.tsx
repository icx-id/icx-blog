import { Box, Container, Flex, Grid, Image, MediaQuery, Stack, Text } from '@mantine/core';
import React from 'react';
import { AboutContainer } from './AboutContainer';

import OurStory from '~/images/our-story.svg';
import OurStoryImgDesktop from '~/images/our-story-desktop.png';
import OurStoryImgMobile from '~/images/our-story-mobile.png';

export const OurStorySection = () => {
  return (
    <MediaQuery smallerThan="md" styles={{ paddingTop: '80px', paddingBottom: 40 }}>
      <Box
        sx={{ paddingTop: '128px', paddingBottom: 80, position: 'relative', background: 'white' }}>
        <Container size="ll">
          <MediaQuery smallerThan="md" styles={{ fontSize: '1.25em' }}>
            <Text fw={800} sx={{ fontSize: '2em' }}>
              Our Story
            </Text>
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ marginTop: '0' }}>
            <Grid gutter="xl">
              <Grid.Col xs={12} md={8}>
                <MediaQuery largerThan="md" styles={{ marginTop: 16 }}>
                  <Grid mt={16} gutter="xl">
                    <Grid.Col sm={12}>
                      <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                        <Grid sx={{ borderTop: '1px solid #E0E5E6', padding: '2em 0' }}>
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
                                borderRight: '1px solid #E0E5E6',
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
                        <Grid sx={{ borderTop: '1px solid #E0E5E6', padding: '2em 0' }}>
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
                                borderRight: '1px solid #E0E5E6',
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
                        <Grid sx={{ borderTop: '1px solid #E0E5E6', padding: '2em 0' }}>
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
                                borderRight: '1px solid #E0E5E6',
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
                              Reached a total of 150 billion IDR fundraised in equity
                            </Grid.Col>
                          </MediaQuery>
                        </Grid>
                      </MediaQuery>
                      <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                        <Grid sx={{ borderTop: '1px solid #E0E5E6', padding: '2em 0' }}>
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
                                borderRight: '1px solid #E0E5E6',
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
                              Awarded the “Best Crowdfunding Platform” by ALUDI & Dunia Fintech
                              while reaching more than 89.000 users and helping to raise an addition
                              of 1750+ in employment
                            </Grid.Col>
                          </MediaQuery>
                        </Grid>
                      </MediaQuery>
                      <MediaQuery smallerThan="md" styles={{ border: '0', padding: '1em 0.5em 0' }}>
                        <Grid sx={{ borderTop: '1px solid #E0E5E6', padding: '2em 0' }}>
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
                                borderRight: '1px solid #E0E5E6',
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
                              LandX rebranded themselves into Indonesia Crowdfunding Exchange(ICX)
                            </Grid.Col>
                          </MediaQuery>
                        </Grid>
                      </MediaQuery>
                    </Grid.Col>
                    <Grid.Col sm={12}>
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
                                src={OurStory}
                                style={{ objectFit: 'cover', flexShrink: 0, height: '100%' }}
                              />
                            </Box>
                          </Box>
                        </MediaQuery>
                      </Flex>
                    </Grid.Col>
                  </Grid>
                </MediaQuery>
              </Grid.Col>
              <Grid.Col xs={12} md={4}>
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Box>
                    <Image maw={360} src={OurStoryImgDesktop} />
                  </Box>
                </MediaQuery>
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                  <Stack align="center">
                    <MediaQuery query="(min-width: 450px)" styles={{ maxWidth: '400px' }}>
                      <Image maw="86vw" src={OurStoryImgMobile} />
                    </MediaQuery>
                  </Stack>
                </MediaQuery>
              </Grid.Col>
            </Grid>
          </MediaQuery>
        </Container>
      </Box>
    </MediaQuery>
  );
};
