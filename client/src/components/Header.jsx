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
  font-size: 40px;
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
    </MenuContainer>
    </>
  )
}

const Header = ({ setCurrentPage }) => {
  const { width } = useWindowDimensions();
  const imageStyles = {
    width: width >= 768 ? '500px' : '250px',
    height: width >= 768 ? '125px' : '62px'
  }
	return (
		<Container>
      <img onClick={() => setCurrentPage('LowrieSings')} src="images/branding.jpg" alt="LowrieSings" style={imageStyles}/>
			<BurgerMenu setCurrentPage={setCurrentPage} width={width} />
		</Container>
	)
}

export default Header;