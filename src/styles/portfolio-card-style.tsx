import styled from 'styled-components';

const PortfolioStyle = styled.div`
  height: 100vh;
  width: 100vw;
`;

const PortfolioHeaderStyle = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: 15px;
  color: #295165;
  margin-bottom: 15vh;
`;
const PortolioCardStyle = styled.div`
  background-image: linear-gradient(#fee0ff, #fff);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.7px);
  -webkit-backdrop-filter: blur(10.7px);
  border: 1px solid rgba(254, 224, 255, 0.44);
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
`;

const IconStyle = styled.img`
  height: 0;
`;

export { PortolioCardStyle, PortfolioStyle, IconStyle, PortfolioHeaderStyle };
