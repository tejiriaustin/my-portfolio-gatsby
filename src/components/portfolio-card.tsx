import React from 'react';
import {
  PortfolioHeaderStyle,
  PortfolioStyle,
  PortolioCardStyle,
} from '../styles/portfolio-card-style';

const PortfolioCard = () => {
  return (
    <PortfolioStyle>
      <PortfolioHeaderStyle>PORTFOLIO & TECH STACK</PortfolioHeaderStyle>
      <PortolioCardStyle>BACKEND</PortolioCardStyle>
    </PortfolioStyle>
  );
};
export { PortfolioCard };
