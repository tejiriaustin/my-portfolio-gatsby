import styled from 'styled-components';

const AboutMeMainStyle = styled.div`
  width: 80%;
  height: 100vh;
  font-family: monospace;
  justify-content: center;
  margin: 0 auto;
`;

const AboutMeHeader = styled.p`
  font-weight: 700;
  letter-spacing: 15px;
  font-size: 27px;
  color: #295165;
  margin-bottom: 10vh;
`;

const AboutMeParagraphOne = styled.p`
  font-weight: 400;
  font-size: 40px;
  width: 70%;
  text-align: left;
  justify-content: flex-end;
`;

const AboutMeParagraphTwo = styled.p`
  font-weight: 400;
  width: 70%;
  font-size: 40px;
  letter-spacing: 1px;
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
