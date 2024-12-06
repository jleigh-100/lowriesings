import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import { useWindowDimensions } from "../hooks.js";


const App = () => {
  const [currentPage, setCurrentPage] = useState("LowrieSings");
  const { width } = useWindowDimensions();
  return (
    <div style={{ display: 'grid', gridTemplateRows: `${width < 768 ? "64px 1fr 100px" : "125px 1fr 100px" }` }}>
      <Header setCurrentPage={setCurrentPage} />
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;