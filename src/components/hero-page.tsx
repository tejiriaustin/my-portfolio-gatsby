import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
// import HeroImage from '../assets/images/hero-image.jpg';
import {
  Hero,
  HeroGeneral,
  HeroImageStyle,
  HeroLogo,
  HeroName,
  HeroNavBar,
  HeroNavBarItem,
  HeroNavBarItems,
  HeroTitle,
  Languages,
} from '../styles/hero-page-styles';

const HeroNavbar = () => {
  return <HeroNavBar>Odiase Tejiri</HeroNavBar>;
};

const HeroPage = () => {
  return (
    <Hero>
      <HeroNavBar>
        <HeroLogo>Odiase Tejiri</HeroLogo>
        <HeroNavBarItems>
          <HeroNavBarItem>about me</HeroNavBarItem>
          <HeroNavBarItem>tech stack</HeroNavBarItem>
          <HeroNavBarItem>contact me</HeroNavBarItem>
        </HeroNavBarItems>
      </HeroNavBar>

      <HeroGeneral>
        <HeroName>
          ODIASE TEJIRI
          <HeroTitle>software engineer</HeroTitle>
          <Languages>GOLANG, FLUTTER</Languages>
        </HeroName>
        <HeroImageStyle>
          {/* <HeroImage /> */}
          <StaticImage
            src="../assets/images/hero-image.jpg"
            alt="A stuff"
            placeholder="blurred"
          />
          {/* <img src={HeroImage} alt="r" /> */}
        </HeroImageStyle>
      </HeroGeneral>
    </Hero>
  );
};
export { HeroPage };
