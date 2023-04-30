import React from "react";
import { HomeDataType } from "../types";
import { Container, Text } from "@mantine/core";

export const Home: React.FC<{ data: HomeDataType }> = ({ data }) => {
  const { title } = data;

  return (
    <>
      {/* add banner here */}

      <Container>
        <Text>ICX - {title}</Text>
      </Container>
    </>
  );
};

export default Home;
