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
import { GolangIcon } from './icons/golang';
import { GraphqlIcon } from './icons/graphql-icon';
import { GrpcIcon } from './icons/grpc';
import { HerokuIcon } from './icons/heroku';
import { OctaCatIcons } from './icons/octicons';
import { PostgresIcon } from './icons/postrgres-icon';
import { RedisIcon } from './icons/redis';
import { SqlIcon } from './icons/sql';
import { ImageContainer } from './stack-icons';

const getRandomNumber = () => {
  let min = 10;
  let max = 300;
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomNumberX = () => {
  let min = 10;
  let max = 650;
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomYaxis = (x: number): number[] => {
  let min = 10;
  let max = 350;

  var result = new Array(x);
  for (let i = 0; i < x; ++i) {
    result.push(Math.random());
  }

  return result;
};

const PortfolioCard = () => {
  gsap.registerPlugin(ScrollTrigger);
  const portfolioCardRef = React.useRef<HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap.from(portfolioCardRef.current, {
      scrollTrigger: {
        trigger: portfolioCardRef.current,
      },
      rotationX: 180,
      duration: 1,
      scale: 0.5,
      delay: 0.2,
      ease: 'power2',
    });
  }, []);

  React.useEffect(() => {
    let yaxi = getRandomYaxis(10);
  }, []);

  return (
    <PortfolioStyle id="tech-stack">
      <PortfolioHeaderStyle>PORTFOLIO & TECH STACK</PortfolioHeaderStyle>
      <PortolioCardStyle ref={portfolioCardRef}>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <OctaCatIcons />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <GitIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <GraphqlIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <HerokuIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <PostgresIcon />
        </ImageContainer>
        BACKEND
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <AWSIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumber()} y={getRandomNumber()}>
          <RedisIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <GolangIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <SqlIcon />
        </ImageContainer>
        <ImageContainer x={getRandomNumberX()} y={getRandomNumber()}>
          <GrpcIcon />
        </ImageContainer>
      </PortolioCardStyle>
    </PortfolioStyle>
  );
};
export { PortfolioCard };
