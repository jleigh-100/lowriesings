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
background-color: #4A306D;
color: #D3BCCC;
`
const MenuContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
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
            <MenuIcon />
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
                      <MenuItem onClick={() => setCurrentPage('home')}>Home</MenuItem>
                      <MenuItem onClick={() => setCurrentPage('about')}>About Me</MenuItem>
                      <MenuItem onClick={() => setCurrentPage('songlist')}>Song list</MenuItem>
                      <MenuItem onClick={() => setCurrentPage('request')}>Request form</MenuItem>
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