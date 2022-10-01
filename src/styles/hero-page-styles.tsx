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
  font-size: 25px;
`;

const HeroNavBarItems = styled.ul`
  font-weight: 300;
  font-size: 20px;
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
  font-size: 170px;
  width: 50%;
  margin-top: 0%;
`;

const HeroTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
`;

const Languages = styled.div`
  margin-top: 2%;
  letter-spacing: 10px;
  font-weight: 100;
  font-size: 20px;
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
