import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import { useWindowDimensions } from "../hooks.js";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: ${(props) =>
    props.width < 768 ? "64px 1fr 100px" : "200px 1fr 100px"};
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("LowrieSings");
  const { width } = useWindowDimensions();
  return (
    <Container width={width}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </Container>
  );
};

export default App;
