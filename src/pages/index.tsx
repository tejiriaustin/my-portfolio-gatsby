import type { HeadFC } from 'gatsby';
import { gsap } from 'gsap';
import React from 'react';
import { AboutMe } from '../components/about-me';
import { Footer } from '../components/footer';
import { HeroPage } from '../components/hero-page';
import { PortfolioCard } from '../components/portfolio-card';
import { GlobalOpacity, GlobalStyles } from '../global-Styles';

const override = {
  TextAlign: 'center',
  height: '80vh',
  width: '100%',
  display: 'flex',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
};

const Global2 = {};

const IndexPage = () => {
  const globalOpacityRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.from(globalOpacityRef.current, {
      opacity: 0,
      duration: 0.2,
    });
  }, []);

  return (
    <div>
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
        {
          <GlobalOpacity ref={globalOpacityRef}>
            <HeroPage />
            <AboutMe />
            <PortfolioCard />
            <Footer />
          </GlobalOpacity>
        }
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Odiase Tejiri</title>;
