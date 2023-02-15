import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import {
  PortfolioHeaderStyle,
  PortfolioStyle,
  PortolioCardStyle,
} from '../styles/portfolio-card-style';
import { AWSIcon } from './icons/aws-icon';
import { GitIcon } from './icons/git';
import { GraphqlIcon } from './icons/graphql-icon';
import { HerokuIcon } from './icons/heroku';
import { OctaCatIcons } from './icons/octicons';
import { PostgresIcon } from './icons/postrgres-icon';
import { ImageContainer } from './stack-icons';

const getRandomNumber = () => {
  let min = 10;
  let max = 300;
  return Math.round(Math.random() * (max - min) + min);
};

const PortfolioCard = () => {
  gsap.registerPlugin(ScrollTrigger);
  const portfolioCardRef = React.useRef<HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap.from(portfolioCardRef.current, {
      scrollTrigger: {
        trigger: portfolioCardRef.current,
        toggleActions: 'restart pause none reverse',
      },
      rotationX: 180,
      duration: 1,
      scale: 0.5,
      delay: 0.2,
      ease: 'power2',
    });
  }, []);

  return (
    <PortfolioStyle id="tech-stack">
      <PortfolioHeaderStyle>PORTFOLIO & TECH STACK</PortfolioHeaderStyle>
      <PortolioCardStyle ref={portfolioCardRef}>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <OctaCatIcons />
        </ImageContainer>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <GitIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <GraphqlIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <HerokuIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <PostgresIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <AWSIcon />
        </ImageContainer>
        BACKEND
      </PortolioCardStyle>
    </PortfolioStyle>
  );
};
export { PortfolioCard };
