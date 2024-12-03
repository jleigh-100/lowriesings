import React from "react";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutMe.jsx";
import { FAQs } from "./pages/FAQs.jsx";
import { Videos } from "./pages/Videos.jsx";
import { SongList } from "./pages/SongList.jsx";
import { PriceList } from "./PriceList.jsx";

export const Container = styled.div`
  margin: 8px;
  display: flex;
  min-height: 85%;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #000;
  > ul {
    margin: 0;
    > p {
      margin: 0;
      font-size: 100px;
    }
  }
  
`

const Body = ({ currentPage }) => {
  if (currentPage === "About Me") return <AboutPage />
  if (currentPage === "Song List") return <SongList />
  if (currentPage === "FAQs") return <FAQs />
  if (currentPage === "Videos") return <Videos />
  if (currentPage === "Prices") return <PriceList />
  else return <HomePage />
}

export default Body;