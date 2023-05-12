import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Header,
  Menu,
  Stack,
  Text,
  createStyles,
  em,
  getBreakpointValue,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { navbarMenus, NavbarMenu } from './static/menus';
import { NavbarProps } from '../types';
import { useStore } from '~/stores';

// --------------------------------------- styles

type StyleProps = { isScrolled: boolean };

const useStyles = createStyles((theme, { isScrolled }: StyleProps) => ({
  root: {
    position: 'fixed',
    top: 0,
    zIndex: 5,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    transition: 'all 0.3s',
    boxShadow: isScrolled ? '0px 4px 30px rgba(0, 0, 0, 0.05)' : 'initial',
  },

  unstyledLink: {
    color: 'initial',
    textDecoration: 'initial',
    display: 'block',
    padding: `${rem(10)} ${rem(22)}`,
    borderRadius: theme.radius.md,
    transition: 'all 100ms linear',
    ':hover': {
      opacity: 0.8,
      textDecoration: `solid underline ${isScrolled ? '#000' : '#fff'} 2px`,
      textUnderlineOffset: 4,
    },
  },

  buttonSize: {
    height: 'auto',
    padding: `${rem(6)} ${rem(20)}`,
    borderRadius: theme.radius.md,
  },

  icxLogo: {
    width: 86,
    height: 40,
    [theme.fn.smallerThan('md')]: {
      width: 56,
      height: 26,
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}));

// --------------------------------------- components

export const Navbar: FC<PropsWithChildren & NavbarProps> = ({ navbarSolid = false, pathname }) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`,
  );
  const [drawerOpened, { close: closeDrawer, open: openDrawer }] = useDisclosure(false);
  const [menuOpened, { close: closeMenu, open: openMenu }] = useDisclosure(false);

  const [isScrolled, setScrolled] = useState(navbarSolid);
  const [handleDropdown] = useState('');

  const { classes } = useStyles({ isScrolled });

  const { accessToken, onLogout } = useStore();

  const handleScroll = () => {
    const fixedNavbar = document.getElementById('fixed-navbar');

    if (fixedNavbar) {
      if (Boolean(handleDropdown) || window.pageYOffset > 1 || navbarSolid) {
        setScrolled(true);
        fixedNavbar.style.backgroundColor = '#fff';
      } else {
        setScrolled(false);
        fixedNavbar.style.backgroundColor = 'transparent';
      }
    }
  };

  const logOutAccount = () => {
    onLogout();
    closeDrawer();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarSolid]);

  useEffect(() => setScrolled(navbarSolid), [pathname]);

  return (
    <Box id="fixed-navbar" className={classes.root}>
      <Container size="ll">
        <Header
          height={isMobile ? 64 : 80}
          sx={{ borderBottom: 'initial', backgroundColor: 'initial' }}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Link to="/" style={{ color: 'initial', textDecoration: 'initial' }}>
              {isScrolled ? (
                <StaticImage
                  src="../../images/icx-navbar-logo-dark.png"
                  alt="icx-navbar-logo"
                  placeholder="blurred"
                  className={classes.icxLogo}
                />
              ) : (
                <StaticImage
                  src="../../images/icx-navbar-logo.png"
                  alt="icx-navbar-logo"
                  placeholder="blurred"
                  className={classes.icxLogo}
                />
              )}
            </Link>

            <Group spacing={48} className={classes.hiddenMobile}>
              {navbarMenus.map(({ id, name, pathname: path }: NavbarMenu) => (
                <Link key={id} to={path} className={classes.unstyledLink}>
                  <Text size={16} fw={600} lh="22px" color={isScrolled ? '#000' : '#fff'}>
                    {name}
                  </Text>
                </Link>
              ))}
            </Group>
            {accessToken == null ? (
              <Group spacing={24} className={classes.hiddenMobile}>
                <Button
                  component="a"
                  href="/register"
                  variant="outline"
                  className={classes.buttonSize}
                  sx={{
                    color: isScrolled ? '#000' : '#fff',
                    borderColor: isScrolled ? '#000' : '#fff',
                  }}>
                  <Text fw={500}>Sign Up</Text>
                </Button>
                <Button
                  component="a"
                  href="/login"
                  className={classes.buttonSize}
                  sx={{
                    backgroundColor: '#00C48F',
                    ':hover': {
                      backgroundColor: '#02B082',
                    },
                  }}>
                  <Text fw={500}>Login</Text>
                </Button>
              </Group>
            ) : (
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={closeMenu}
                onOpen={openMenu}
                withinPortal>
                <Menu.Target>
                  <Burger
                    color={!isScrolled ? '#fff' : '#000'}
                    onClick={openMenu}
                    opened={menuOpened}
                    className={classes.hiddenMobile}
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => onLogout()}>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}

            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: 'pop-top-right' }}
              onClose={closeDrawer}
              onOpen={openDrawer}
              withinPortal>
              <Burger
                color={!isScrolled ? '#fff' : '#000'}
                onClick={openDrawer}
                opened={false}
                className={classes.hiddenDesktop}
              />
              <Drawer
                size="100%"
                opened={drawerOpened}
                onClose={closeDrawer}
                closeButtonProps={{ size: 'lg' }}
                title={
                  <StaticImage
                    src="../../images/icx-navbar-logo.png"
                    alt="icx-navbar-logo"
                    placeholder="blurred"
                    className={classes.icxLogo}
                  />
                }
                styles={{
                  content: { backgroundColor: 'black', color: 'white' },
                  header: { backgroundColor: 'black', paddingInline: 38, paddingTop: 30 },
                }}>
                <Stack justify="space-between" h="100%" mih="80vh" sx={{ position: 'relative' }}>
                  <Box>
                    {navbarMenus.map(({ id, name, pathname: path }: NavbarMenu) => (
                      <Box mt={30} key={id}>
                        <Link
                          key={id}
                          to={path}
                          className={classes.unstyledLink}
                          onClick={closeDrawer}>
                          <Text size={16} color="#fff" fw="bold">
                            {name}
                          </Text>
                        </Link>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    {accessToken === null ? (
                      <Button
                        style={{
                          backgroundColor: '#00C48F',
                          borderRadius: '30px',
                        }}
                        component="a"
                        href="/register"
                        w="60%">
                        Join ICX
                      </Button>
                    ) : (
                      <Button
                        sx={{
                          ':hover': {
                            backgroundColor: 'inherit',
                          },
                          color: 'white',
                        }}
                        onClick={logOutAccount}
                        variant="subtle"
                        w="60%">
                        Logout
                      </Button>
                    )}
                  </Box>
                  <Box
                    sx={{
                      background:
                        'linear-gradient(310deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 62%)',
                      position: 'absolute',
                      width: '100vw',
                      height: '100vw',
                      right: '-50vw',
                      bottom: '-30vw',
                      borderRadius: '50%',
                      display: 'flex',
                      zIndex: -1,
                    }}
                  />
                </Stack>
              </Drawer>
            </Menu>
          </Group>
        </Header>
      </Container>
    </Box>
  );
};
