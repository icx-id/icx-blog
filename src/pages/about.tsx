import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { OurStorySection, SummarySection } from '~/features/about';
import { SiteMetadata } from '~/components';
import { Box, MediaQuery, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const videoLink = 'https://www.youtube.com/embed/tgbNymZ7vqY';
const videoTitle = 'Bohemian Rhapsody | Muppet Music Video | The Muppets';

const AboutPage: React.FC<PageProps> = () => {
  const [opened, { open: onOpenVideo, close: onCloseVideo }] = useDisclosure(false);

  return (
    <>
      <Box>
        <SummarySection onOpenVideo={onOpenVideo} />
        <OurStorySection />
        {/* TODO: enable when ready */}
        {/* <NewsSection /> */}
      </Box>

      <Modal opened={opened} onClose={onCloseVideo} size="auto" centered>
        <MediaQuery query="(max-width: 450px)" styles={{ width: '100%', height: 203 }}>
          <MediaQuery query="(max-width: 570px)" styles={{ width: 360, height: 203 }}>
            <MediaQuery query="(max-width: 850px)" styles={{ width: 480, height: 270 }}>
              <MediaQuery query="(max-width: 1250px)" styles={{ width: 720, height: 405 }}>
                <Box w={1080} h={608}>
                  <iframe
                    src={`${videoLink}?autoplay=1`}
                    title={videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    height="100%"
                    width="100%"
                  />
                </Box>
              </MediaQuery>
            </MediaQuery>
          </MediaQuery>
        </MediaQuery>
      </Modal>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SiteMetadata title="About" />;
