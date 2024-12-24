import React, { useState } from "react";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage.jsx";
import { FAQs } from "./pages/FAQs.jsx";
import { SongList } from "./pages/SongList.jsx";
import { PriceList } from "./pages/PriceList.jsx";
import { Contact } from "./pages/Contact.jsx";

export const Container = styled.div`
  margin: 8px;
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

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;

const Body = ({ currentPage, setCurrentPage, loading }) => {
  const [message, setMessage] = useState("");
  if (loading) return <Container><Loader /></Container>;

  if (currentPage === "Song List") return <SongList />;
  if (currentPage === "FAQs")
    return (
      <FAQs
        message={message}
        setMessage={setMessage}
        setCurrentPage={setCurrentPage}
      />
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
