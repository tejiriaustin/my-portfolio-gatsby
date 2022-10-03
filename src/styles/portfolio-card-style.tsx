import styled from 'styled-components';

const PortfolioStyle = styled.div`
  height: 100vh;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 20em;
    height: 20em;
    border-radius: 50%;
    z-index: -1;
    background: #cbe4f4;
    box-shadow: -20px -20px 30px #d9e5ed;
    filter: blur(20px);
  }
`;

const PortfolioHeaderStyle = styled.div`
  text-align: center;
  font-size: calc(15px + (27 - 15) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;
  letter-spacing: 15px;
  color: #295165;
  margin-bottom: 15vh;
`;

const PortolioCardStyle = styled.div`
  border: 1px solid rgba(254, 224, 255, 0.44);
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  place-items: center;
  font-weight: 400;
  color: #295165;
  font-size: calc(10px + (40 - 10) * ((100vw - 300px) / (1600 - 300)));
  letter-spacing: 1.6rem;
  display: grid;
  background: linear-gradient(
    180deg,
    #fee0ff 0%,
    rgba(254, 192, 255, 0) 27.08%,
    rgba(255, 252, 255, 0.4) 90.9%
  );
  box-shadow: 0px 4px 15px -1px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 40px;
`;

const IconStyle = styled.img`
  height: 0;
`;

export { PortolioCardStyle, PortfolioStyle, IconStyle, PortfolioHeaderStyle };
