import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import {
  PortfolioHeaderStyle,
  PortfolioStyle,
  PortolioCardStyle,
} from '../styles/portfolio-card-style';

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
      delay: 0.2,
      ease: 'power2',
    });
  }, []);

  return (
    <PortfolioStyle>
      <PortfolioHeaderStyle>PORTFOLIO & TECH STACK</PortfolioHeaderStyle>
      <PortolioCardStyle ref={portfolioCardRef}>BACKEND</PortolioCardStyle>
    </PortfolioStyle>
  );
};
export { PortfolioCard };
