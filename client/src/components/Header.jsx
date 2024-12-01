import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme/theme.json';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 125px;
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
  top: 25px;
  right: 10px;
  width: 100px;
  height: 100px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 100px;
  right: 0;
  z-index: ${props => props.open ? '' : '-'}1;
  color: ${theme.titleColor};
  background-color: ${theme.secondaryColor};
  border-radius: 10px;
  border: 1px solid #ADB5BD;
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity 0.3s;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ADB5BD;
  }
  font-size: 40px;
`;

const BurgerMenu = ({ setCurrentPage }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(() => !open);
  };

  const handleSelection = (page) => {
    setCurrentPage(page);
    setOpen(false);
  }

  return (
    <>
    <IconContainer>
      <MenuIcon style={{ width: '80px', height: '80px', fill: 'black' }} onClick={() => handleToggle()}/>
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

const Header = ({ currentPage, setCurrentPage }) => {
	return (
		<Container>
			<h1 onClick={() => setCurrentPage('LowrieSings')}>{currentPage}</h1>
			<BurgerMenu setCurrentPage={setCurrentPage}/>
		</Container>
	)
}

export default Header;