import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme/theme.json';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  background-color: ${theme.headerFooterColor};
  color: #D3BCCC;
  h1 {
    margin-top: 18px;
    color: ${theme.titleColor};
  }
  // position: sticky;
  top: -2px;
`
const IconContainer = styled.div`
  position: absolute;
  top: 10px;
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
  color: ${theme.titleColor};
  background-color: ${theme.headerFooterColor};
  border-radius: 10px;
  border: 1px solid #D3BCCC;
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity 0.3s;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #D3BCCC;
  }
  font-size: 30px;
`;

const BurgerMenu = ({ setCurrentPage }) => {
  const [open, setOpen] = React.useState(false);
  console.log(open)
  const handleToggle = () => {
    setOpen(() => !open);
  };

  return (
    <>
    <IconContainer>
      <MenuIcon style={{ width: '80px', height: '80px', fill: 'black' }} onClick={() => handleToggle()}/>
    </IconContainer>
    <MenuContainer open={open} >
      <MenuItem onClick={() => setCurrentPage('lowrie sings')}>Home</MenuItem>
      <MenuItem onClick={() => setCurrentPage('about me')}>About Me</MenuItem>
      <MenuItem onClick={() => setCurrentPage('song list')}>Song list</MenuItem>
      <MenuItem onClick={() => setCurrentPage('faqs')}>FAQs</MenuItem>
      <MenuItem onClick={() => setCurrentPage('videos')}>Videos</MenuItem>
    </MenuContainer>
    </>
  )
}

const StyledMicrophone = styled.img`
  position: absolute;
  top: 18px;
  left: 10px;
  width: 65px;
  height: 65px;
`;

const Header = ({ currentPage, setCurrentPage }) => {
	return (
		<Container>
      <StyledMicrophone src="images/microphone.png" alt="microphone" />
			<h1 onClick={() => setCurrentPage('lowrie sings')}>{currentPage}</h1>
			<BurgerMenu setCurrentPage={setCurrentPage}/>
		</Container>
	)
}

export default Header;