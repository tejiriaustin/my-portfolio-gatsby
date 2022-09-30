import styled from 'styled-components';

const FooterSection = styled.div`
  width: 100vw;
  height: 100vh;
`;

const FooterHead = styled.div`
  text-align: center;
  font-size: 30px;
  font-family: 'Sora';
  font-weight: 500;
  letter-spacing: 10px;
  padding: 10px;
  color: #295165;
`;

const FooterBody = styled.div`
  font-family: 'Sora';
  font-weight: 200;
  font-size: 30px;
  letter-spacing: 3px;
  width: 80%;
`;

const FooterTextSection = styled.div`
  width: 35%;
`;

const FooterImageSection = styled.div`
  width: 40%;
`;
export {
  FooterSection,
  FooterBody,
  FooterHead,
  FooterTextSection,
  FooterImageSection,
};
