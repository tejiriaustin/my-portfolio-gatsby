import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
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
          <StaticImage
            src="../assets/images/hero-image.jpg"
            alt="A stuff"
            placeholder="blurred"
            width={450}
          />
        </HeroImageStyle>
      </HeroGeneral>
    </Hero>
  );
};
export { HeroPage };
