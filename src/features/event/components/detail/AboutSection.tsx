import React, { FC } from 'react';
import { Box, Text, TypographyStylesProvider } from '@mantine/core';
import { Event } from '../../types';

type AboutEventType = Pick<Event, 'description' | 'participantRequirements'>;

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
      {Boolean(event.participantRequirements) && (
        <Box mt={32}>
          <Text fz={16} fw={600} lh="20px">
            Participant Requirement
          </Text>
          <TypographyStylesProvider mt={16} color="#495057">
            <div
              dangerouslySetInnerHTML={{
                __html: `
          <p>
          ${event.participantRequirements}
          </p>
        `,
              }}
            />
          </TypographyStylesProvider>
        </Box>
      )}
    </Box>
  );
};
