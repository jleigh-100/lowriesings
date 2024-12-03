import React from "react"
import { Container } from "../Body.jsx"
import { Testimonials } from "../Testimonials.jsx"

export const HomePage = () => {
  return (
    <Container>
      <h1>Home</h1>
      <img src="/images/singing.jpg" alt="Lowrie singing" width='100%' />
      <p>Hello! I'm Lowrie, welcome to my website! I am a singer</p>
      <Testimonials />
    </Container>
  )
}
