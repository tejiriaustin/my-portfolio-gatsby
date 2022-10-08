import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import uuid from 'react-uuid';
import {
  PortfolioHeaderStyle,
  PortfolioStyle,
  PortolioCardStyle,
} from '../styles/portfolio-card-style';

const imagePaths = [
  '../assets/images/18133.png',
  '../assets/images/heroku.png',
  '../assets/images/heroku.png',
  '../assets/images/Octicons-mark-github.svg',
];

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
    <PortfolioStyle>
      <PortfolioHeaderStyle>PORTFOLIO & TECH STACK</PortfolioHeaderStyle>
      <PortolioCardStyle ref={portfolioCardRef}>
        {imagePaths.map((path, index) =>
          imageContainer(
            '../assets/images/18133.png',
            uuid(),
            getRandomNumber(),
            getRandomNumber()
          )
        )}
        BACKEND
      </PortolioCardStyle>
    </PortfolioStyle>
  );
};
export { PortfolioCard };

const imageContainer = (
  path: string,
  key: string,
  x = 20,
  y = 20
): JSX.Element => {
  const imagePaths = [
    '../assets/images/18133.png',
    '../assets/images/heroku.png',
    '../assets/images/heroku.png',
    '../assets/images/Octicons-mark-github.svg',
  ];

  return (
    <div
      key={key}
      style={{
        position: 'absolute',
        top: y,
        left: x,
        height: 40,
        width: 40,
      }}
    >
      <StaticImage
        src={String(imagePaths[0])}
        alt="A stuff"
        placeholder="blurred"
        width={90}
      />
    </div>
  );
};
