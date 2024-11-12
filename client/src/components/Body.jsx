import React from "react";
import styled from "styled-components";
import { Testimonials } from "./Testimonials.jsx";

const Container = styled.div`
  margin: 8px;
  display: flex;
  min-height: 85%;
  flex-direction: column;
  align-items: center;
  color: #0E273C;
`

const HomePage = () => {
  return (
    <Container>
      <h2>A professional events/wedding singer based in Bath, available anywhere</h2>
      <img src="/images/singing.jpg" alt="Lowrie singing" />
      <p>Hello! I'm Lowrie</p>
      <Testimonials />
    </Container>
  )
}

const AboutPage = () => {
  return (
    <Container>
      <p>Hi! I'm Lowrie. I'm a singer and musician.</p>
    </Container>
  )
}

const RequestForm = () => {
  return (
    <Container>
      <p>Request a song!</p>
      <form>
        <label for="song">Song:</label>
        <input type="text" id="song" name="song" required></input>
        <label for="artist">Artist:</label>
        <input type="text" id="artist" name="artist" required></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <button type="submit">Submit</button>
      </form>
    </Container>
  )
}

const SongList = () => {
  return (
    <Container>
      <p>Although I can do any song, here are some I can do whenever:</p>
      <ul>
        <li>song 1</li>
        <li>song 2</li>
        <li>song 3</li>
        <li>song 4</li>
      </ul>
    </Container>
  )
}


const Body = ({ currentPage }) => {
  if (currentPage === "about") return <AboutPage />
  if (currentPage === "songlist") return <SongList />
  if (currentPage === "request") return <RequestForm />
  else return <HomePage />
}

export default Body;