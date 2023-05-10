import React from 'react';
import { PageProps } from 'gatsby';
import { Container, Box, Text, Paper, SimpleGrid, Image } from '@mantine/core';
import EventCard from '~/components/EventCard';

const EventsPage: React.FC<PageProps> = () => {
  return (
    <Box sx={{ minHeight: '100vh' }} pb="lg">
      <Paper
        sx={{
          backgroundImage: 'url(/img/image-banner-1.png)',
          height: '20rem',
        }}>
        <Container sx={{ height: '100%' }} size="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Text color="#FFF" fz={30} fw="bold">
                ICX Connect
              </Text>
              <Image src="/img/arrow-3.png" alt="arrow" height={28} width={28} ml={12} />
            </Box>
            <Text color="#F1F3F5" fz={16} maw={420}>
              Perluas koneksimu dengan komunitas investor terbesar di Indonesia.
            </Text>
          </Box>
        </Container>
      </Paper>
      <Container size="lg">
        <Box mt={85}>
          <SimpleGrid
            breakpoints={[
              { minWidth: 'sm', cols: 1 },
              { minWidth: 'md', cols: 4 },
            ]}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default EventsPage;
