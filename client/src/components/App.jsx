import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

const App = () => {
  const [currentPage, setCurrentPage] = useState("LowrieSings");

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Body currentPage={currentPage}/>
      <Footer />
    </Container>
  );
}

export default App;