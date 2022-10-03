import styled from 'styled-components';

const FooterSection = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, #fff 70%, #82b4ff 100%);
`;

const FooterHead = styled.div`
  text-align: center;
  padding: 30px;
  font-size: calc(15px + (30 - 15) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 500;
  letter-spacing: 10px;
  color: #295165;
`;

const FooterBody = styled.div`
  font-weight: 200;
  font-size: calc(10px + (30 - 10) * ((100vw - 300px) / (1600 - 300)));
  letter-spacing: 3px;
  width: 70%;
  height: 70vh;
  margin: 0 auto;
`;

const FooterTextSection = styled.div`
  place-items: center;
  width: 30%;
  margin: 0 auto;
`;

const FooterImageSection = styled.div`
  background-image: url('../assets/images/footer-lamp.png');
  width: 40%;
  margin: 0 auto;
`;

const FooterBodyTop = styled.div`
  display: flex;
`;

const FooterBodyBottom = styled.div`
  font-weight: 300;
  font-size: calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)));
  color: #4b668d;
  margin: 5rem auto;
  place-items: center;
  display: grid;
  width: 70%;
  height: 15%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #4b668d;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export {
  FooterSection,
  FooterBody,
  FooterHead,
  FooterBodyTop,
  FooterBodyBottom,
  FooterTextSection,
  FooterImageSection,
};
