import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  background-color: #4A306D;
  color: #D3BCCC;
  h1 {
    font-size: 40px;
  }
`
const MenuContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 100px;
  height: 100px;
`;


const BurgerMenu = ({ setCurrentPage }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current && anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MenuContainer>
      <Stack direction="row" spacing={2}>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MenuIcon sx={{ width: '50px', height: '50px', fill: 'black' }} />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-end"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem sx={{ fontSize: '30px' }} onClick={() => setCurrentPage('home')}>Home</MenuItem>
                      <MenuItem sx={{ fontSize: '30px' }} onClick={() => setCurrentPage('about')}>About Me</MenuItem>
                      <MenuItem sx={{ fontSize: '30px' }} onClick={() => setCurrentPage('songlist')}>Song list</MenuItem>
                      <MenuItem sx={{ fontSize: '30px' }} onClick={() => setCurrentPage('faqs')}>FAQs</MenuItem>
                      <MenuItem sx={{ fontSize: '30px' }} onClick={() => setCurrentPage('videos')}>Videos</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
      </Stack>
    </MenuContainer>

  );
}

const Header = ({setCurrentPage}) => {
	return (
		<Container>
			<h1 onClick={() => setCurrentPage('home')}>Lowrie GB</h1>
			<BurgerMenu setCurrentPage={setCurrentPage}/>
		</Container>
	)
}

export default Header;