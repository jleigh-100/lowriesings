import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import { useWindowDimensions } from "../hooks.js";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: ${(props) =>
    props.width < 768 ? "64px 1fr 100px" : "200px 1fr 100px"};
  ${(props) => props.loading && "height: 100vh;"}
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setLoading(true);
    const currentPage = localStorage.getItem("currentPage");
    setCurrentPage(currentPage || "LowrieSings");
    setTimeout(() => {
      setLoading(false);
    }, 333); /// show loader for 333ms to prevent flicker
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <Container width={width} loading={loading}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} />
      <Footer />
    </Container>
  );
};

export default App;
