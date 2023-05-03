import {
  Box,
  Button,
  Container,
  Image,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  //   footer: {
  //     marginTop: rem(120),
  //     paddingTop: `calc(${theme.spacing.xl} * 2)`,
  //     paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  //     backgroundColor: theme.colors.dark[6],
  //     borderTop: `${rem(1)} solid ${
  //       theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
  //     }`,
  //   },
  image: {
    width: rem(800),
    backgroundColor: theme.colors.green,
  },
  button: {
    backgroundColor: "#00C48F",
  },
  title: {
    fontSize: rem(38),
  },
  subtitle: {
    fontSize: rem(22),
  },
}));

interface KycProps {}

export const Kyc: React.FC<KycProps> = () => {
  const { classes } = useStyles();
  return (
    <Box bg="#EEFFF2" h="87.2vh" py={rem(50)}>
      <Container h="100%">
        <Box
          style={{
            display: "flex",
            gap: rem(49),
            background: "#FFF",
            height: "100%",
          }}
        >
          <Box className={classes.image} />
          <Box>
            <Text className={classes.title}>Isi Biodata Pribadi</Text>
            <Text className={classes.subtitle}>
              Biodata pribadi Anda diperlukan untuk membuka akun investasi
            </Text>
            <Button className={classes.button}>Selanjutnya</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
