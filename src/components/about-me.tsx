import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import {
  AboutMeHeader,
  AboutMeMainStyle,
  AboutMeParagraphOne,
  AboutMeParagraphTwo,
  AboutMeParagraphTwoOuter,
} from '../styles/about-me-styles';

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);
  const paragraphOneRef = React.useRef<HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap.from(paragraphOneRef.current, {
      scrollTrigger: {
        trigger: paragraphOneRef.current,
        toggleActions: 'restart pause none reverse',
      },
      x: -300,
      duration: 1,
      ease: 'power2',
    });
  }, []);

  const paragraphTwoRef = React.useRef<HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap.from(paragraphTwoRef.current, {
      scrollTrigger: {
        trigger: paragraphOneRef.current,
        toggleActions: 'restart none none reverse',
      },
      x: 300,
      duration: 1,
      ease: 'power2',
    });
  }, []);

  return (
    <AboutMeMainStyle>
      <AboutMeHeader>ABOUT ME</AboutMeHeader>
      <AboutMeParagraphOne ref={paragraphOneRef}>
        An engineer interested in building solutions to problems in a pragmatic
        way. There’s a lot to look forward to out there, and I want front row
        seats
      </AboutMeParagraphOne>
      <AboutMeParagraphTwoOuter>
        <AboutMeParagraphTwo ref={paragraphTwoRef}>
          I love books, games, movies and anything that shows the positive side
          of the ingenuity of humanity
        </AboutMeParagraphTwo>
      </AboutMeParagraphTwoOuter>
    </AboutMeMainStyle>
  );
};

export { AboutMe };
