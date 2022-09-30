import React from 'react';
import {
  FooterBody,
  FooterHead,
  FooterImageSection,
  FooterSection,
  FooterTextSection,
} from '../styles/footer-styles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterHead>CONTACT ME</FooterHead>
      <FooterBody>
        <FooterTextSection>
          LET’S GET THE NEXT BIG THING UP AND RUNNING, TOGETHER
        </FooterTextSection>
        <FooterImageSection></FooterImageSection>
      </FooterBody>
    </FooterSection>
  );
};

export { Footer };
