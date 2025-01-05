import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme/theme.json";
import { useWindowDimensions } from "../hooks.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${(props) => (props.width > 768 ? "200px" : "105px")};
  background-color: ${theme.headerFooterColor};
  color: #FBEFF7;
  top: -2px;
`;
const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 25px;
  right: 10px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.titleColor};
  background-color: ${theme.secondaryColor};
  ${(props) =>
    props.width > 768 &&
    `
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    color: ${theme.secondaryColor};
    background-color: ${theme.titleColor};
    `}
  gap: 10px;
  position: absolute;
  top: ${(props) => (props.width > 768 ? "125px" : "105px")};
  right: 0;
  z-index: ${(props) => (props.open ? "" : "-")}1;
  border-radius: 10px;
  border: 1px solid black;
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#FBEFF7" : "")};
  color: ${(props) => (props.selected ? "black" : "")};
  border-radius: 10px;
  &:hover {
    color: black;
    background-color: #FBEFF7dd;
  }
  font-size: 30px;
`;

const HeaderContainer = styled.div`
  cursor: pointer;
  height: 80px;
  margin-top: 12px;
  background-color: #FBEFF7;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  border-radius: 5px;
`;

const BurgerMenu = ({ currentPage, setCurrentPage, width }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(() => !open);
  };

  const handleSelection = (page) => {
    setCurrentPage(page);
    setOpen(false);
  };

  const iconStyling = {
    width: width >= 768 ? "80px" : "60px",
    height: width >= 768 ? "80px" : "60px",
    fill: "#FBEFF7",
  };

  return (
    <>
      {width < 768 && (
        <IconContainer>
          <MenuIcon style={iconStyling} onClick={() => handleToggle()} />
        </IconContainer>
      )}
      <MenuContainer open={width > 768 || open} width={width}>
        <MenuItem
          selected={currentPage === "LowrieSings"}
          onClick={() => handleSelection("LowrieSings")}
        >
          Home
        </MenuItem>
        <MenuItem
          selected={currentPage === "Song List"}
          onClick={() => handleSelection("Song List")}
        >
          Song list
        </MenuItem>
        <MenuItem
          selected={currentPage === "FAQs"}
          onClick={() => handleSelection("FAQs")}
        >
          FAQs
        </MenuItem>
        <MenuItem
          selected={currentPage === "Prices"}
          onClick={() => handleSelection("Prices")}
        >
          Prices
        </MenuItem>
        <MenuItem
          selected={currentPage === "Contact"}
          onClick={() => handleSelection("Contact")}
        >
          Contact
        </MenuItem>
      </MenuContainer>
    </>
  );
};

const Header = ({ currentPage, setCurrentPage }) => {
  const { width } = useWindowDimensions();
  return (
    <Container width={width}>
      <HeaderContainer width={width}>
        <StyledImage src="/images/logo.jpg" alt="Lowrie Sings Logo" height={width > 768 ? "100px" : "80px"} />
      </HeaderContainer>
      <BurgerMenu
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        width={width}
      />
    </Container>
  );
};

export default Header;
