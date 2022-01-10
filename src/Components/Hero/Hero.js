import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { MovieSVG } from "../Svg/AllSvgs";
import {
  ContentContainer,
  HeroContainer,
  ListItem,
  Navigation,
} from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <Header heading="MYFLIX" />
      <MovieSVG style={{ width: "50px", height: "50px" }} />
      <ContentContainer>
        <Navigation></Navigation>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
