import React from "react";
import { AboutDataType } from "../types";

export const About: React.FC<{ data: AboutDataType }> = ({ data }) => {
  const { title, banner } = data;

  return (
    <div>
      <div>ICX - {title}</div>
      <div>
        <img src={banner}></img>
      </div>
    </div>
  );
};

export default About;
