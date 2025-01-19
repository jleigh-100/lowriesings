import React from "react";
import styled from "styled-components";

// this is from MUI - saves npm installing the whole module
const StyledSvg = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
`

export const Quote = () => {
  return (
    <StyledSvg viewBox={"0 0 24 24"} className="quote-icon">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
    </StyledSvg>
  );
}

export const SendIcon = () => {
  return (
    <StyledSvg viewBox={"0 0 24 24"} className="send-icon">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
    </StyledSvg>
  );
}

export const MenuIcon = () => {
  return (
    <StyledSvg viewBox={"0 0 24 24"} className="menu-icon">
      <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
    </StyledSvg>
  );
}