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
  font-size: 1.6rem;
`;

const HeroNavBarItems = styled.ul`
  font-weight: 300;
  font-size: 1.25rem;
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
  font-size: 11rem;
  width: 50%;
  margin: 0;
  padding: 0;
`;

const HeroTitle = styled.div`
  font-weight: 700;
  font-size: 3.125rem;
`;

const Languages = styled.div`
  margin-top: 2%;
  letter-spacing: 10px;
  font-weight: 100;
  font-size: 1.25rem;
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
