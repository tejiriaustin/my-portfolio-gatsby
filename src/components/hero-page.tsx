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

  const allRefs = React.useRef<Array<HTMLLIElement | null>>([]);
  React.useEffect(() => {
    let currentRefs = allRefs.current as gsap.TweenTarget;

    gsap.defaults({ ease: 'power3.out' });

    let tl1 = gsap.timeline();

    tl1.staggerFrom(
      currentRefs,
      1,
      {
        delay: 0.3,
        duration: 1,
        autoAlpha: 0,
        y: -50,
      },
      0.4
    );
    return () => {};
  }, []);

  return (
    <Hero ref={LogoRef}>
      <HeroNavBar>
        <HeroLogo>Odiase Tejiri</HeroLogo>
        <HeroNavBarItems>
          <HeroNavBarItem
            ref={(element) => {
              allRefs.current[0] = element;
            }}
          >
            <a href="#about-me">about me</a>
          </HeroNavBarItem>
          <HeroNavBarItem
            ref={(element) => {
              allRefs.current[1] = element;
            }}
          >
            <a href="#tech-stack">tech stack</a>
          </HeroNavBarItem>
          <HeroNavBarItem
            ref={(element) => {
              allRefs.current[2] = element;
            }}
          >
            <a href="#contact-me">contact me</a>
          </HeroNavBarItem>
          <HeroNavBarItem
            ref={(element) => {
              allRefs.current[3] = element;
            }}
          >
            <a
              href="https://docs.google.com/document/d/1f7GPHCq5w-Fr1TiPYsVcOD3arKIyHWeIS2Ly1KLC7gI/edit?usp=sharing"
              target="_blank"
            >
              my resume
            </a>
          </HeroNavBarItem>
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
