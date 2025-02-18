import React, { lazy, useState } from "react";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage.jsx";
import { FAQs } from "./pages/FAQs.jsx";
import { SongList } from "./pages/SongList.jsx";
import { PriceList } from "./pages/PriceList.jsx";
import { Contact } from "./pages/Contact.jsx";

export const Container = styled.div`
  margin: 0 20px;
  display: flex;
  min-height: 85%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;


const Body = ({ currentPage, setCurrentPage }) => {
  const [message, setMessage] = useState("");

  if (currentPage === "Song List") return <SongList />;
  if (currentPage === "FAQs")
    return (
      <FAQs message={message} setMessage={setMessage} />
    );
  if (currentPage === "Prices") return <PriceList />;
  if (currentPage === "Contact")
    return <Contact message={message} setMessage={setMessage} />;
  else
    return (
      <HomePage
        message={message}
        setMessage={setMessage}
        setCurrentPage={setCurrentPage}
      />
    );
};

export default Body;
