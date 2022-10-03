import { StaticImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import React, { useEffect } from 'react';
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

const HeroPage = () => {
  useEffect(() => {
    gsap.timeline().from(HeroLogo, 0.5, {
      duration: 1,
      y: -100,
      ease: 'Bouce',
    });
  }, []);

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
            sizes="(min-width: 300px) 500px,
            800vw"
            placeholder="blurred"
            width={500}
          />
        </HeroImageStyle>
      </HeroGeneral>
    </Hero>
  );
};
export { HeroPage };
