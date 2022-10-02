import styled from 'styled-components';

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
`;

const HeroNavBar = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
`;

const HeroLogo = styled.p`
  font-weight: 700;
  font-size: calc(10px + (25 - 10) * ((100vw - 300px) / (1600 - 300)));
`;

const HeroNavBarItems = styled.ul`
  font-weight: 300;
  font-size: calc(5px + (20 - 5) * ((100vw - 300px) / (1600 - 300)));
  display: flex;
`;

const HeroNavBarItem = styled.li`
  text-align: center;
  margin: auto;
  list-style-type: none;
  display: inline-block;
  padding: 10px 20px;
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
`;

const Languages = styled.div`
  margin-top: 2%;
  letter-spacing: 10px;
  font-weight: 100;
  font-size: calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)));
`;

const HeroImageStyle = styled.div`
  width: 100%;
  height: auto;
  z-index: -1;
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
