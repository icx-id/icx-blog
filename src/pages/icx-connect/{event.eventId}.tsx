import React, { FC, useState } from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { Box, Button, Container, Drawer, Flex, MediaQuery, Modal, Text } from '@mantine/core';
import {
  ContentLayout,
  Event,
  EventRegistrationData,
  JumbotronSection,
  SuccessComponent,
  useRegisterEvent,
  useRegisterEventErrors,
} from '~/features/event';
import { Breadcrumbs, SiteMetadata } from '~/components';
import { useStore } from '~/stores';
import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';

export type EventDetailQuery = {
  event: Event;
};

export const eventDetailQuery = graphql`
  query ($id: String) {
    event(id: { eq: $id }) {
      id
      eventId
      brochureLink
      coverImage
      description
      endDate
      initialQuota
      location
      mapLink
      minimumUserInvestment
      onlineLink
      remainingQuota
      startDate
      subtitle
      title
      type
      banners {
        url
        mediaType
      }
      speakers {
        name
        company
        position
        imageUrl
      }
    }
  }
`;

export const config = async () => {
  type EventsQuery = {
    allEvent?: {
      nodes: Event[];
    };
  };

  // old events data will not created as pages at build time, but using DSG = ISR
  graphql`
    query ($before: Date = "2023-01-01") {
      allEvent(filter: { startDate: { gt: $before } }) {
        nodes {
          id
          eventId
          brochureLink
          coverImage
          description
          endDate
          initialQuota
          location
          mapLink
          minimumUserInvestment
          onlineLink
          remainingQuota
          startDate
          subtitle
          title
          type
          banners {
            url
            mediaType
          }
          speakers {
            name
            company
            position
            imageUrl
          }
        }
      }
    }
  `;

  return ({ data, params }: PageProps<EventsQuery>) => {
    const events = new Set(data?.allEvent?.nodes.map(({ eventId }) => eventId));

    return {
      defer: events.has(+params.eventId),
    };
  };
};

const eventDetailBreadcrumbs = (title: string) => [
  { label: 'Home', href: '/' },
  { label: 'ICX Connect', href: '/icx-connect' },
  { label: title },
];

const EventDetailPage: FC<PageProps<EventDetailQuery>> = ({ data }) => {
  const { user } = useStore();
  const { mutateAsync: onRegisterEvent, isLoading } = useRegisterEvent(`${data.event.eventId}`);

  const [isOpenModal, { close: onCloseModal, open: onOpenModal }] = useDisclosure(false);
  const [isOpenDrawer, { close: onCloseDrawer, open: onOpenDrawer }] = useDisclosure(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const onRegisterSuccess = () => {
    window.scrollTo(0, 0);
    setRegisterSuccess(true);
  };

  const handleRegisterEvent = async () => {
    try {
      await onRegisterEvent();
      onCloseDrawer();
      onCloseModal();
      onRegisterSuccess();
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;

      if (errors && errors.includes(useRegisterEventErrors.ACCESS_TOKEN_EXPIRED)) {
        notifications.show({
          title: 'Register failed',
          message: 'Akses telah berakhir, silakan login kembali.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterEventErrors.NOT_YET_OPEN)) {
        notifications.show({
          title: 'Register failed',
          message: 'Pendaftaran belum dibuka.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterEventErrors.QUOTA_NOT_AVALABLE)) {
        notifications.show({
          title: 'Register failed',
          message: 'Kuota sudah penuh.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterEventErrors.REGISTRATION_CLOSED)) {
        notifications.show({
          title: 'Register failed',
          message: 'Pendaftaran sudah ditutup.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterEventErrors.ALREADY_REGISTERED)) {
        notifications.show({
          title: 'Register failed',
          message: 'Anda sudah terdaftar dalam event ini',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterEventErrors.MINIMUM_INVESTMENT)) {
        notifications.show({
          title: 'Register failed',
          message: 'Jumlah investasi Anda belum mencapai batas minimum event ini',
          color: 'red',
        });
        return;
      }

      // captureError(e as Error);
      console.log(e as Error);
    }
  };

  if (registerSuccess) {
    return (
      <MediaQuery smallerThan="sm" styles={{ backgroundColor: '#fff' }}>
        <Flex w="100%" mih="100vh" align="center" justify="center" bg="#f0f0f0" pos="relative">
          <SuccessComponent />
        </Flex>
      </MediaQuery>
    );
  }

  return (
    <main>
      <Box pt={{ base: 64, md: 80 }} sx={{ overflow: 'hidden' }}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Container size="lg">
            <Breadcrumbs items={eventDetailBreadcrumbs(data.event.title)} pt={16} pb={16} />
          </Container>
        </MediaQuery>
        <JumbotronSection banners={data.event.banners} />
        <Container size="lg" mt={{ base: 16, md: 40 }}>
          <ContentLayout
            breadcrumbs={
              <Breadcrumbs items={eventDetailBreadcrumbs(data.event.title)} pt={0} pb={0} />
            }
            event={data.event}
            onOpenModal={onOpenModal}
            onOpenDrawer={onOpenDrawer}
          />
        </Container>
      </Box>

      <Modal
        opened={isOpenModal}
        onClose={onCloseModal}
        centered
        withCloseButton={false}
        size="lg"
        radius={16}>
        <Box p={56}>
          <Flex align="center" justify="space-between">
            <Text fz={20} fw={600} lh="24px">
              Confirm Registration
            </Text>
            <IconX onClick={onCloseModal} style={{ cursor: 'pointer' }} />
          </Flex>
          <EventRegistrationData user={user} event={data.event} />
          <Button
            mt={40}
            fullWidth
            loading={isLoading}
            loaderPosition="center"
            onClick={handleRegisterEvent}>
            Konfirmasi
          </Button>
        </Box>
      </Modal>

      <Drawer
        opened={isOpenDrawer}
        onClose={onCloseDrawer}
        position="bottom"
        withCloseButton={false}
        sx={{
          '.mantine-Drawer-content': {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          },
        }}>
        <Flex align="center" justify="space-between">
          <Text mt={8} fz={20} fw={600} lh="24px">
            Confirm Registration
          </Text>
          <IconX onClick={onCloseDrawer} style={{ cursor: 'pointer' }} />
        </Flex>
        <EventRegistrationData user={user} event={data.event} />
        <Button
          fullWidth
          mt={40}
          size="lg"
          loading={isLoading}
          loaderPosition="center"
          onClick={handleRegisterEvent}>
          <Text fz={14} fw={500} lh="20px">
            Konfirmasi
          </Text>
        </Button>
      </Drawer>
    </main>
  );
};

export const Head: HeadFC = () => <SiteMetadata />;

export default EventDetailPage;
