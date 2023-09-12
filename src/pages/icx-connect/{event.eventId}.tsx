import React, { FC, useState } from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  MediaQuery,
  Modal,
  Stack,
  Text,
} from '@mantine/core';
import {
  ContentLayout,
  Event,
  EventRegistrationData,
  JumbotronSection,
  SuccessComponent,
  useRegisterPublicEvent,
  useRegisterPublicEventErrors,
} from '~/features/event';
import { Breadcrumbs, MaskInput, SiteMetadata, Input } from '~/components';
import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';
import { useFormik } from 'formik';
import { parseToPhoneNumber } from '~/utils/format';

export type EventDetailQuery = {
  event: Event;
};

interface RegisterFormValues {
  name: string;
  email: string;
  phoneNumber: string;
}

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
  const { mutateAsync: onRegisterPublicEvent, isLoading } = useRegisterPublicEvent(
    `${data.event.eventId}`,
  );

  const [isOpenModal, { close: onCloseModal, open: onOpenModal }] = useDisclosure(false);
  const [isOpenDrawer, { close: onCloseDrawer, open: onOpenDrawer }] = useDisclosure(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isNextPageModal, setIsNextPageModal] = useState(false);

  const onRegisterSuccess = () => {
    window.scrollTo(0, 0);
    setRegisterSuccess(true);
  };

  const handleCloseModal = () => {
    onCloseModal();
    setIsNextPageModal(false);
  };

  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    errors: formErrors,
    values,
    isValid,
    setFieldValue,
  } = useFormik<RegisterFormValues>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    onSubmit: () => {},
  });

  const handleRegisterEvent = async () => {
    try {
      await onRegisterPublicEvent({
        email: values.email,
        name: values.name,
        phoneNumber: parseToPhoneNumber(values.phoneNumber),
      });
      onCloseDrawer();
      handleCloseModal();
      onRegisterSuccess();
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data?.errors;

      if (errors && errors.includes(useRegisterPublicEventErrors.NOT_YET_OPEN)) {
        notifications.show({
          title: 'Register failed',
          message: 'Pendaftaran belum dibuka.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterPublicEventErrors.QUOTA_NOT_AVALABLE)) {
        notifications.show({
          title: 'Register failed',
          message: 'Kuota sudah penuh.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterPublicEventErrors.REGISTRATION_CLOSED)) {
        notifications.show({
          title: 'Register failed',
          message: 'Pendaftaran sudah ditutup.',
          color: 'red',
        });
        return;
      }
      if (errors && errors.includes(useRegisterPublicEventErrors.ALREADY_REGISTERED)) {
        notifications.show({
          title: 'Register failed',
          message: 'Anda sudah terdaftar dalam event ini',
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
        onClose={handleCloseModal}
        centered
        withCloseButton={false}
        size="lg"
        radius={16}>
        {isNextPageModal ? (
          <Box p={56}>
            <Flex align="center" justify="space-between">
              <Text fz={20} fw={600} lh="24px">
                Confirm Registration
              </Text>
              <IconX onClick={handleCloseModal} style={{ cursor: 'pointer' }} />
            </Flex>
            <EventRegistrationData user={values} event={data.event} />
            <Button
              mt={40}
              fullWidth
              loading={isLoading}
              loaderPosition="center"
              onClick={handleRegisterEvent}>
              Konfirmasi
            </Button>
          </Box>
        ) : (
          <Box p={56}>
            <Flex align="center" justify="space-between" mb={24}>
              <Text fz={20} fw={600} lh="24px">
                Informasi Pendaftar
              </Text>
              <IconX onClick={handleCloseModal} style={{ cursor: 'pointer' }} />
            </Flex>
            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  error={formErrors.name}
                  label="Name"
                  value={values.name}
                  name="name"
                  placeholder="Masukkan Nama Lengkap"
                  onChange={handleChange}
                />
                <Input
                  error={formErrors.email}
                  label="Email"
                  value={values.email}
                  name="email"
                  placeholder="Masukkan Email"
                  onChange={handleChange}
                />
                <MaskInput
                  mask="+62 000 0000 0000"
                  error={formErrors.phoneNumber}
                  label="Nomor HP"
                  value={values.phoneNumber}
                  name="phoneNumber"
                  placeholder="Masukkan Nomor HP"
                  type="phoneNumber"
                  onAccept={value => setFieldValue('phoneNumber', value)}
                />
              </Stack>
            </form>
            <Button
              mt={40}
              fullWidth
              loading={isLoading}
              loaderPosition="center"
              disabled={
                isLoading ||
                isSubmitting ||
                !isValid ||
                !values.name ||
                !values.email ||
                !values.phoneNumber
              }
              onClick={() => setIsNextPageModal(true)}>
              Selanjutnya
            </Button>
          </Box>
        )}
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
        <EventRegistrationData user={values} event={data.event} />
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
