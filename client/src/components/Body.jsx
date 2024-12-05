import React, { useState } from "react";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutMe.jsx";
import { FAQs } from "./pages/FAQs.jsx";
import { SongList } from "./pages/SongList.jsx";
import { PriceList } from "./pages/PriceList.jsx";

export const Container = styled.div`
  margin: 8px;
  display: flex;
  min-height: 85%;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #000;
  > ul {
    width: 90%;
    margin: 0;
    > p {
      margin: 0;
      margin-top: 30px;
      font-size: 50px;
    }
  }
  
`

const Body = ({ currentPage, setCurrentPage }) => {
  const [message, setMessage] = useState("");

  if (currentPage === "Song List") return <SongList />
  if (currentPage === "FAQs") return <FAQs message={message} setMessage={setMessage} setCurrentPage={setCurrentPage}/>
  if (currentPage === "Prices") return <PriceList />
  else return <HomePage message={message} setMessage={setMessage}/>
}

export default Body;