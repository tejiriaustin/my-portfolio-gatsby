import styled from 'styled-components';

const Hero = styled.div`
  width: 100vw;
`;

const HeroNavBar = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
`;

const HeroLogo = styled.p`
  width: 30%;
  place-items: center;
  font-weight: 700;
  font-size: calc(10px + (25 - 10) * ((100vw - 300px) / (1600 - 300)));
`;

const HeroNavBarItems = styled.ul`
  font-weight: 300;
  font-size: calc(5px + (20 - 5) * ((100vw - 300px) / (1600 - 300)));
  display: flex;
  justify-content: space-between;
`;

const HeroNavBarItem = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  width: 35%;
`;

const HeroGeneral = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
`;

const HeroName = styled.p`
  font-weight: 100;
  font-size: calc(70px + (176 - 70) * ((100vw - 300px) / (1600 - 300)));
  width: 50%;
  margin: 0;
  padding: 0;
`;

const HeroTitle = styled.div`
  font-weight: 700;
  font-size: calc(10px + (50 - 10) * ((100vw - 300px) / (1600 - 300)));
  font-size: 50;
  margin: 0;
  padding: 0;
`;

const Languages = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 2%;
  letter-spacing: 10px;
  font-weight: 100;
  font-size: calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)));
`;

const HeroImageStyle = styled.div`
  width: 100%;
  z-index: -1;

  @media screen and (min-width: 300px) {
    /* For mobile phones: */
    background-size: cover;
    z-index: -2;
    width: 100%;
  }
`;

export {
  Hero,
  HeroName,
  HeroTitle,
  Languages,
  HeroGeneral,
  HeroNavBar,
  HeroLogo,
  HeroImageStyle,
  HeroNavBarItem,
  HeroNavBarItems,
};
