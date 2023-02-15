import { StaticImage } from 'gatsby-plugin-image';
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
    <FooterSection id="contact-me">
      <FooterHead>CONTACT ME</FooterHead>
      <FooterBody>
        <FooterBodyTop>
          <FooterTextSection>
            LET’S GET THE NEXT BIG THING UP AND RUNNING, TOGETHER
          </FooterTextSection>
          <FooterImageSection>
            <StaticImage
              src="../assets/images/idea.svg"
              alt="A stuff"
              sizes="(min-width: 300px) 500px,
            800vw"
              placeholder="blurred"
              width={500}
            />
          </FooterImageSection>
        </FooterBodyTop>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejiriaustin123@gmail.com">
          <FooterBodyBottom>
            <a href="mailto:tejiriaustin123@gmail.com">
              tejiriaustin123@gmail.com
            </a>
          </FooterBodyBottom>
        </a>
      </FooterBody>
    </FooterSection>
  );
};

export { Footer };
