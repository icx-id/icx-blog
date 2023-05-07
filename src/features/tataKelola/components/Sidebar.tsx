import { Grid, Stack, rem } from '@mantine/core';
import React from 'react';
import { Link } from '~/components';
import { useLocation } from '@reach/router';

interface SidebarItemProps {
  title: string;
  to: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, to, isActive }) => {
  return (
    <Link color={isActive ? 'brand' : '#000'} to={to}>
      {title}
    </Link>
  );
};

const listSidebarNavigation = [
  { label: 'Kebijakan Privasi', link: '/tata-kelola/kebijakan-privasi' },
  { label: 'ISMS', link: '/tata-kelola/isms' },
  { label: 'Mitigasi Risiko', link: '/tata-kelola/mitigasi-risiko' },
  { label: 'Syarat dan Ketentuan', link: '/tata-kelola/syarat-dan-ketentuan' },
  { label: 'SLA', link: '/tata-kelola/sla' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Grid.Col h="100%" span={3} style={{ borderRight: '3px solid #00A478' }}>
      <Stack spacing={rem(24)}>
        {listSidebarNavigation.map((navigation, idx) => (
          <SidebarItem
            key={idx.toString()}
            title={navigation.label}
            to={navigation.link}
            isActive={location.pathname === navigation.link}
          />
        ))}
      </Stack>
    </Grid.Col>
  );
};
