import React from "react";
import { createStyles, Text, Container, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colors.dark[6],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Text color="white">Footer</Text>
      </Container>
    </footer>
  );
};

export default Footer;
