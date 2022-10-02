import styled from 'styled-components';

const AboutMeMainStyle = styled.div`
  width: 80%;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    width: 30em;
    height: 30em;
    border-radius: 50%;
    z-index: -1;
    background: #cbe4f4;
    box-shadow: -20px -20px 30px #d9e5ed;
    filter: blur(20px);
  }
`;

const AboutMeHeader = styled.p`
  padding-top: 5%;
  font-weight: 700;
  letter-spacing: 15px;
  font-size: calc(15px + (27 - 15) * ((100vw - 300px) / (1600 - 300)));
  color: #295165;
  margin-bottom: 10vh;
`;

const AboutMeParagraphOne = styled.p`
  font-weight: 400;
  font-size: calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)));
  width: 70%;
  text-align: left;
  justify-content: flex-end;
`;

const AboutMeParagraphTwo = styled.p`
  font-weight: 400;
  width: 70%;
  font-size: calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)));
  letter-spacing: 0.0625rem;
  text-align: right;
`;

const AboutMeParagraphTwoOuter = styled.div`
  display: flex;
  justify-content: end;
`;

export {
  AboutMeMainStyle,
  AboutMeParagraphOne,
  AboutMeParagraphTwo,
  AboutMeParagraphTwoOuter,
  AboutMeHeader,
};
