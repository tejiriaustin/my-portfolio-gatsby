import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
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

const HeroPage = () => {
  const LogoRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.from(LogoRef.current, {
      y: -200,
      duration: 1,
      ease: 'power2',
    });
  }, []);

  const navBarRef = React.useRef<HTMLUListElement>(null);
  React.useEffect(() => {
    gsap.from(navBarRef.current, {
      x: 500,
      duration: 1,
      ease: 'power1',
      delay: 0.5,
    });
  });

  const heroNameRef = React.useRef<HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap.from(heroNameRef.current, {
      x: -1000,
      duration: 1,
      ease: 'power3',
      delay: 0.5,
    });
  });
  return (
    <Hero ref={LogoRef}>
      <HeroNavBar>
        <HeroLogo>Odiase Tejiri</HeroLogo>
        <HeroNavBarItems ref={navBarRef}>
          <HeroNavBarItem>about me</HeroNavBarItem>
          <HeroNavBarItem>tech stack</HeroNavBarItem>
          <HeroNavBarItem>contact me</HeroNavBarItem>
        </HeroNavBarItems>
      </HeroNavBar>

      <HeroGeneral>
        <HeroName ref={heroNameRef}>
          ODIASE TEJIRI
          <HeroTitle>software engineer</HeroTitle>
          <Languages>GOLANG, FLUTTER</Languages>
        </HeroName>
        <HeroImageStyle>
          <StaticImage
            src="../assets/images/hero-image.jpg"
            alt="A stuff"
            sizes="(min-width: 768px) 500px,
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
