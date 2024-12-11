import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme/theme.json";
import { useWindowDimensions } from "../hooks.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  :64px;
  height: ${(props) => (props.width > 768 ? "200px" : "64px")};
  background-color: ${theme.headerFooterColor};
  color: #d3bccc;
  h1 {
    margin-top: 18px;
    color: ${theme.titleColor};
  }
  top: -2px;
`;
const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 2px;
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
  top: ${(props) => (props.width > 768 ? "125px" : "64px")};
  right: 0;
  z-index: ${(props) => (props.open ? "" : "-")}1;
  border-radius: 10px;
  border: 1px solid black;
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "lightgrey" : "")};
  color: ${(props) => (props.selected ? "black" : "")};
  border-radius: 10px;
  &:hover {
    color: black;
    background-color: #b2b2b2;
  }
  font-size: 30px;
`;

const HeaderContainer = styled.div`
  cursor: pointer;
  height: ${(props) => (props.width < 768 ? "40px" : "100px")};
  margin-top: 12px;
  background-color: #f6f5ee;
  border-radius: 10px;
  padding: 0 10px;
  > h1 {
    margin-top: ${(props) => (props.width < 768 ? "8px" : "12px")};
    font-size: ${(props) => (props.width < 768 ? "20px" : "64px")};
  }
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
    fill: "#F6F5EE",
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
        <h1 onClick={() => setCurrentPage("LowrieSings")}>LOWRIESINGS</h1>
        {/* <img src="/images/logo.png" alt="Lowrie Sings Logo" height="80" style={{ marginTop: 10, borderRadius: 10}}/> */}
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
