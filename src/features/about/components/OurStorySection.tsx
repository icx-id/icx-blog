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
            <Grid.Col md={8} sm={12}>
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
                        Indonesia Crowdfunding Exchange formerly known as LandX is a securities
                        crowdfunding platform that connects founders and investors.
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
                        Indonesia Crowdfunding Exchange formerly known as LandX is a securities
                        crowdfunding platform that connects founders and investors.
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
                        Indonesia Crowdfunding Exchange formerly known as LandX is a securities
                        crowdfunding platform that connects founders and investors.
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
                        Indonesia Crowdfunding Exchange formerly known as LandX is a securities
                        crowdfunding platform that connects founders and investors.
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
                        Indonesia Crowdfunding Exchange formerly known as LandX is a securities
                        crowdfunding platform that connects founders and investors.
                      </Grid.Col>
                    </MediaQuery>
                  </Grid>
                </MediaQuery>
              </AboutContainer>
            </Grid.Col>
            <Grid.Col md={3} sm={12}>
              <Flex h="100%" align="center" justify="center" pos="relative">
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '70%',
                      background: 'black',
                      bottom: 0,
                    }}
                  />
                </MediaQuery>
                <Box px="1.5em">
                  <MediaQuery smallerThan="md" styles={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Image
                      src={ourStory}
                      radius="md"
                      ml="auto"
                      sx={{ objectFit: 'cover', flexShrink: 0 }}
                    />
                  </MediaQuery>
                </Box>
              </Flex>
            </Grid.Col>
          </Grid>
        </MediaQuery>
      </Box>
    </MediaQuery>
  );
};
