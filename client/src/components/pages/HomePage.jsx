import React from "react"
import { Container } from "../Body.jsx"
import { Testimonials } from "../Testimonials.jsx"

export const HomePage = () => {
  return (
    <Container>
      <img src="/images/singing.jpg" alt="Lowrie singing" width='100%' />
      <p>Hello! I'm Lowrie, welsome to my website! I am a singer</p>
      <Testimonials />
    </Container>
  )
}
