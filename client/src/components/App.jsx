import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import { useWindowDimensions } from "../hooks.jsx";
// import 'react-toastify/dist/ReactToastify.css';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 125px 1fr 100px;
`

const App = () => {
  const [currentPage, setCurrentPage] = useState("LowrieSings");
  const { width } = useWindowDimensions();
  return (
    <Container style={{ display: 'grid', gridTemplateRows: `${width < 768 ? "64px 1fr 100px" : "125px 1fr 100px" }` }}>
      <Header setCurrentPage={setCurrentPage} />
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </Container>
  );
}

export default App;