import type { HeadFC } from 'gatsby';
import * as React from 'react';
import { AboutMe } from '../components/about-me';
import { Footer } from '../components/footer';
import { HeroPage } from '../components/hero-page';
import { PortfolioCard } from '../components/portfolio-card';
import { GlobalStyles } from '../global-Styles';

const IndexPage = () => {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="HandheldFriendly" content="true" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      <HeroPage />
      <AboutMe />
      <PortfolioCard />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Welcome</title>;
