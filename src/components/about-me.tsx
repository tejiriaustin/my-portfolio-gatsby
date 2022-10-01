import React from 'react';

import {
  AboutMeHeader,
  AboutMeMainStyle,
  AboutMeParagraphOne,
  AboutMeParagraphTwo,
  AboutMeParagraphTwoOuter,
} from '../styles/about-me-styles';

const AboutMe = () => {
  return (
    <AboutMeMainStyle>
      <AboutMeHeader>ABOUT ME</AboutMeHeader>
      <AboutMeParagraphOne>
        An engineer interested in building solutions to problems in a pragmatic
        way. There’s a lot to look forward to out there, and I want front row
        seats
      </AboutMeParagraphOne>

      <AboutMeParagraphTwoOuter>
        <AboutMeParagraphTwo>
          I love books, games, movies and anything that shows the positive side
          of the ingenuity of humanity
        </AboutMeParagraphTwo>
      </AboutMeParagraphTwoOuter>
    </AboutMeMainStyle>
  );
};

export { AboutMe };
