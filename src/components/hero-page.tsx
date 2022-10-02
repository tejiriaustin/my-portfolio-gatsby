import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  Hero,
  HeroGeneral,
  HeroLogo,
  HeroName,
  HeroNavBar,
  HeroNavBarItem,
  HeroNavBarItems,
  HeroTitle,
  Languages,
} from '../styles/hero-page-styles';

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
        <StaticImage
          src="../assets/images/hero-image.jpg"
          alt="A stuff"
          sizes="(min-width: 300px) 500px,
            800vw"
          placeholder="blurred"
          width={500}
        />
      </HeroGeneral>
    </Hero>
  );
};
export { HeroPage };
