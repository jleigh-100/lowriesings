import React from "react";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutMe.jsx";
import { FAQs } from "./pages/FAQs.jsx";
import { Videos } from "./pages/Videos.jsx";
import { SongList } from "./pages/SongList.jsx";

export const Container = styled.div`
  margin: 8px;
  display: flex;
  min-height: 85%;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #0E273C;
`

const Body = ({ currentPage }) => {
  if (currentPage === "about me") return <AboutPage />
  if (currentPage === "song list") return <SongList />
  if (currentPage === "faqs") return <FAQs />
  if (currentPage === "videos") return <Videos />
  else return <HomePage />
}

export default Body;