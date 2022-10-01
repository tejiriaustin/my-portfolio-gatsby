import React from 'react';
import {
  FooterBody,
  FooterBodyBottom,
  FooterBodyTop,
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
        <FooterBodyTop>
          <FooterTextSection>
            LET’S GET THE NEXT BIG THING UP AND RUNNING, TOGETHER
          </FooterTextSection>
          <FooterImageSection />
        </FooterBodyTop>
        <FooterBodyBottom>tejiriaustin123@gmail.com</FooterBodyBottom>
      </FooterBody>
    </FooterSection>
  );
};

export { Footer };
