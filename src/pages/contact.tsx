import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { ContactUs } from '~/features/contactUs';
import { SiteMetadata } from '~/components';

const ContactUsPage: React.FC<PageProps> = () => {
  return <ContactUs />;
};

export default ContactUsPage;

export const Head: HeadFC = () => <SiteMetadata title="Contact Us" />;
