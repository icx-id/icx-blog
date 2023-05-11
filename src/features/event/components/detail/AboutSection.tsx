import React, { FC } from 'react';
import { Box, Text, TypographyStylesProvider } from '@mantine/core';
import { Event } from '../../types';

type AboutEventType = Pick<Event, 'description'>;

type AboutSectionProps = {
  event: AboutEventType;
};

export const AboutSection: FC<AboutSectionProps> = ({ event }) => {
  return (
    <Box pt={{ base: 32, md: 40 }}>
      {/* about */}
      <Box>
        <Text fz={16} fw={600} lh="20px">
          About This Event
        </Text>
        <TypographyStylesProvider mt={16} color="#495057">
          <div
            dangerouslySetInnerHTML={{
              __html: event?.description ?? '',
            }}
          />
        </TypographyStylesProvider>
      </Box>

      {/* requirement */}
      <Box mt={32}>
        <Text fz={16} fw={600} lh="20px">
          Participant Requirement
        </Text>
        <TypographyStylesProvider mt={16} color="#495057">
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <p>
            Our Financial Conference is an inclusive event that welcomes students, professionals, entrepreneurs, and investors who are interested in the world of finance.
            This conference is designed to provide valuable insights and knowledge that can help you succeed in your career or business. For students who have an interest in finance, this is a great opportunity to learn about the latest trends and technologies in the industry, as well as to connect with professionals and potential employers.
            You'll gain a deeper understanding of the finance industry and discover how you can use your skills and knowledge to make a difference.
          </p>
        `,
            }}
          />
        </TypographyStylesProvider>
      </Box>
    </Box>
  );
};
