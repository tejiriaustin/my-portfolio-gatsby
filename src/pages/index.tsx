import type { HeadFC } from 'gatsby';
import * as React from 'react';
import { AboutMe } from '../components/about-me';
import { Footer } from '../components/footer';
import { HeroPage } from '../components/hero-page';
import { PortfolioCard } from '../components/portfolio-card';

const IndexPage = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <HeroPage></HeroPage>
      <AboutMe></AboutMe>
      <PortfolioCard></PortfolioCard>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Welcome</title>;
