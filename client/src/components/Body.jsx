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
      <h2>A professional wedding singer based in Bath, available anywhere</h2>
      <img src="/images/singing.jpg" alt="Lowrie singing" />
      <p>Hello! I'm Lowrie</p>
      <Testimonials />
    </Container>
  )
}

const AboutPage = () => {
  return (
    <Container>
      <p>Hi! I'm Lowrie. I'm a singer and have grade 8 clarinet</p>
    </Container>
  )
}

const RequestForm = () => {
  return (
    <Container>
      <p>Request a song!</p>
      <form>
        <label for="song">Song: </label>
        <input type="text" id="song" name="song" required></input>
        <br />
        <label for="artist">Artist:</label>
        <input type="text" id="artist" name="artist" required></input>
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <br />
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
        <li>Hello - Adele</li>
        <li>Make you feel my love - Adele</li>
        <li>Everything - Michael Bublé</li>
        <li>All Star - Smash Mouth (Shrek theme)</li>
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