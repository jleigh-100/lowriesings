import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 6fr 1fr;
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