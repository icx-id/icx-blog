import React from "react";
import { HomeDataType } from "../types";

export const Home: React.FC<{ data: HomeDataType }> = ({ data }) => {
  const { title } = data;

  return (
    <div>
      <div>ICX - {title}</div>
    </div>
  );
};

export default Home;
