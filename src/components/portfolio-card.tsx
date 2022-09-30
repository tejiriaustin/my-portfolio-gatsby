import React from 'react';
import PostgresqlIcon from '../assets/images/postgresql.svg';
import {
  PortfolioHeaderStyle,
  PortfolioStyle,
  PortolioCardStyle,
} from '../styles/portfolio-card-style';

const PostgresIcon = () => {
  return <img src={PostgresqlIcon} />;
};

const PortfolioCard = () => {
  return (
    <PortfolioStyle>
      <PortfolioHeaderStyle>PORTFOLIO & TECH STACK</PortfolioHeaderStyle>
      <PortolioCardStyle>
        <PostgresIcon />
      </PortolioCardStyle>
    </PortfolioStyle>
  );
};
export { PortfolioCard };
