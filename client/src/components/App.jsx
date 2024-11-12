import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 100px;
`

const App = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;