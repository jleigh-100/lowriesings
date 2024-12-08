import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme/theme.json';
import { useWindowDimensions } from "../hooks.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  : 64px;
  height: ${props => props.width > 768 ? "125px" : "64px"};
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
  width: ${props => props.width > 768 ? "87px" : "50px"};
  height: ${props => props.width > 768 ? "87px" : "50px"};
  top: ${props => props.width > 768 ? "25px" : "2px"};
  right: ${props => props.width > 768 ? "25px" : "10px"};
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: ${props => props.width > 768 ? "125px" : "64px"};
  right: 0;
  z-index: ${props => props.open ? '' : '-'}1;
  color: ${theme.titleColor};
  background-color: ${theme.secondaryColor};
  border-radius: 10px;
  border: 1px solid black;
  opacity: ${props => props.open ? 1 : 0};
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

const HeaderContainer = styled.div`
  cursor: pointer;
  height: ${(props) => props.width < 768 ? "40px" : "100px"};
  margin-top: 12px;
  background-color: #F6F5EE;
  border-radius: 10px;
  padding: 0 10px;
  > h1 {
    margin-top: ${(props) => props.width < 768 ? "8px" : "12px"};
    font-size: ${(props) => props.width < 768 ? "20px" : "64px"};
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
    <IconContainer width={width}>
      <MenuIcon style={iconStyling} onClick={() => handleToggle()}/>
    </IconContainer>
    <MenuContainer open={open} width={width}>
      <MenuItem onClick={() => handleSelection('LowrieSings')}>Home</MenuItem>
      <MenuItem onClick={() => handleSelection('Song List')}>Song list</MenuItem>
      <MenuItem onClick={() => handleSelection('FAQs')}>FAQs</MenuItem>
      <MenuItem onClick={() => handleSelection('Prices')}>Prices</MenuItem>
      <MenuItem onClick={() => handleSelection('Contact')}>Contact</MenuItem>
    </MenuContainer>
    </>
  )
}


const Header = ({ setCurrentPage }) => {
  const { width } = useWindowDimensions();
	return (
		<Container width={width}>
      <HeaderContainer width={width}>
        <h1 onClick={() => setCurrentPage('LowrieSings')}>LOWRIESINGS</h1>
      </HeaderContainer>
      <BurgerMenu setCurrentPage={setCurrentPage} width={width} />
		</Container>
	)
}

export default Header;