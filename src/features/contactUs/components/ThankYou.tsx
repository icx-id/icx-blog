import React from 'react';
import { Flex, Text } from '@mantine/core';
import { ContactUsContainer } from '../components/ContactUsContainer';
import { StaticImage } from 'gatsby-plugin-image';

export const ThankYouSection: React.FC = () => {
  return (
    <ContactUsContainer
      icon={
        <Flex py={30}>
          <StaticImage
            src="../../../images/icx-logo-dark.png"
            alt="icx-navbar-logo"
            placeholder="blurred"
          />
        </Flex>
      }
      lastPage
      title="Thank you for reaching out!">
      <Text>Your submission has been received.</Text>
      <Text>We value your time and interest, and we will be in touch soon.</Text>
      <Text>Warm regards, ICX Team.</Text>
    </ContactUsContainer>
  );
};
