import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  Menu,
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
import { useLocation } from '@reach/router';

// --------------------------------------- styles

type StyleProps = { isScrolled: boolean };

const useStyles = createStyles((theme, { isScrolled }: StyleProps) => ({
  root: {
    position: 'fixed',
    top: 0,
    zIndex: 5,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    transition: 'all 0.3s',
    // boxShadow: isScrolled ? '0px 4px 74px rgba(0, 0, 0, 0.05)' : 'initial',
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
    padding: `${rem(8)} ${rem(22)}`,
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

export const Navbar: FC<PropsWithChildren> = () => {
  const theme = useMantineTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`,
  );
  const [menuOpened, { toggle: toggleMenu, close: closeMenu, open: openMenu }] =
    useDisclosure(false);
  const navbarWhite = location.pathname.includes('/tata-kelola');

  const [isScrolled, setScrolled] = useState(false);
  const [handleDropdown] = useState('');

  const { classes } = useStyles({ isScrolled });

  const handleScroll = () => {
    const fixedNavbar = document.getElementById('fixed-navbar');

    if (fixedNavbar) {
      if (window.pageYOffset > 1 || Boolean(handleDropdown)) {
        setScrolled(true);
        fixedNavbar.style.backgroundColor = '#fff';
      } else {
        setScrolled(false);
        fixedNavbar.style.backgroundColor = 'transparent';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box id="fixed-navbar" className={classes.root}>
      <Container size="ll">
        <Header
          height={isMobile ? 64 : 80}
          sx={{ borderBottom: 'initial', backgroundColor: 'initial' }}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Link to="/" style={{ color: 'initial', textDecoration: 'initial' }}>
              {isScrolled || navbarWhite ? (
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
              {navbarMenus.map(({ id, name, pathname }: NavbarMenu) => (
                <Link key={id} to={pathname} className={classes.unstyledLink}>
                  <Text
                    size={16}
                    fw={600}
                    lh="22px"
                    color={isScrolled || navbarWhite ? '#000' : '#fff'}>
                    {name}
                  </Text>
                </Link>
              ))}
            </Group>

            {/* <Group spacing={24} className={classes.hiddenMobile}>
              <Button
                variant="outline"
                className={classes.buttonSize}
                sx={{
                  color: isScrolled ? '#000' : '#fff',
                  borderColor: isScrolled ? '#000' : '#fff',
                }}>
                <Text size={18} fw={500} lh="22px">
                  Sign Up
                </Text>
              </Button>
              <Button
                className={classes.buttonSize}
                sx={{
                  backgroundColor: '#00C48F',
                  ':hover': {
                    backgroundColor: '#02B082',
                  },
                }}>
                <Text size={18} fw={500} lh="22px">
                  Login
                </Text>
              </Button>
            </Group> */}

            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: 'pop-top-right' }}
              onClose={closeMenu}
              onOpen={openMenu}
              withinPortal>
              <Menu.Target>
                <Burger
                  color={isScrolled ? '#000' : '#fff'}
                  opened={menuOpened}
                  onClick={toggleMenu}
                  className={classes.hiddenDesktop}
                />
              </Menu.Target>
              <Menu.Dropdown sx={{ color: '#fff' }}>
                <Menu.Label>Menu</Menu.Label>
                {navbarMenus.map(({ id, name, pathname }: NavbarMenu) => (
                  <Menu.Item key={id}>
                    <Link to={pathname} style={{ color: 'initial', textDecoration: 'initial' }}>
                      <Text size={18} fw={500} lh="22px">
                        {name}
                      </Text>
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Header>
      </Container>
    </Box>
  );
};
