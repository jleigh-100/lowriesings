import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme/theme.json';
import { useWindowDimensions } from "../hooks.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 64px;
  @media (min-width: 768px) {
    height: 125px;
  }
  background-color: ${theme.headerFooterColor};
  color: #D3BCCC;
  h1 {
    margin-top: 18px;
    color: ${theme.titleColor};
  }
  top: -2px;
`
const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 2px;
  right: 10px;
  width: 50px;
  height: 50px;

  @media (min-width: 768px) {
    width: 87px;
    height: 87px;
    top: 25px;
    right: 25px;
}
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 64px;
  @media (min-width: 768px) {
    top: 125px;
  }
  right: 0;
  z-index: ${props => props.open ? '' : '-'}1;
  color: ${theme.titleColor};
  background-color: ${theme.secondaryColor};
  border-radius: 10px;
  border: 1px solid black;
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity 0.3s;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ADB5BD;
    border-radius: 10px;
  }
  font-size: 30px;
`;

const MobileHeaderContainer = styled.div`
  cursor: pointer;
  height: 40px;
  margin-top: 12px;
  background-color: #F6F5EE;
  border-radius: 10px;
  padding: 0 10px;
  > h1 {
    font-size: 20px;
    margin-top: 8px;
  }
`;

const HeaderContainer = styled.div`
  cursor: pointer;
  height: 100px;
  margin-top: 12px;
  background-color: #F6F5EE;
  border-radius: 10px;
  padding: 0 10px;
  > h1 {
    margin-top: 12px;
  }
`;

const BurgerMenu = ({ setCurrentPage, width }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(() => !open);
  };

  const handleSelection = (page) => {
    setCurrentPage(page);
    setOpen(false);
  }

  const iconStyling = {
    width: width >= 768 ? '80px' : '60px',
    height: width >= 768 ? '80px' : '60px',
    fill: '#F6F5EE'
  }

  return (
    <>
    <IconContainer>
      <MenuIcon style={iconStyling} onClick={() => handleToggle()}/>
    </IconContainer>
    <MenuContainer open={open} >
      <MenuItem onClick={() => handleSelection('LowrieSings')}>Home</MenuItem>
      <MenuItem onClick={() => handleSelection('About Me')}>About Me</MenuItem>
      <MenuItem onClick={() => handleSelection('Song List')}>Song list</MenuItem>
      <MenuItem onClick={() => handleSelection('FAQs')}>FAQs</MenuItem>
      <MenuItem onClick={() => handleSelection('Videos')}>Videos</MenuItem>
      <MenuItem onClick={() => handleSelection('Prices')}>Prices</MenuItem>
      <MenuItem onClick={() => handleSelection('Contact')}>Contact</MenuItem>
    </MenuContainer>
    </>
  )
}


const Header = ({ setCurrentPage }) => {
  const { width } = useWindowDimensions();
	return (
		<Container>
      {
        width < 768 ?
        <MobileHeaderContainer width={width}>
          <h1 onClick={() => setCurrentPage('LowrieSings')}>LOWRIESINGS</h1>
        </MobileHeaderContainer>
        :
        <HeaderContainer width={width}>
          <h1 onClick={() => setCurrentPage('LowrieSings')}>LOWRIESINGS</h1>
        </HeaderContainer>
      }
      <BurgerMenu setCurrentPage={setCurrentPage} width={width} />
		</Container>
	)
}

export default Header;