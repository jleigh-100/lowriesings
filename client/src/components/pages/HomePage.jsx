import React from "react"
import { Container } from "../Body.jsx"
import { Testimonials } from "../Testimonials.jsx"

export const HomePage = () => {
  return (
    <Container>
      <img src="/images/singing.jpg" alt="Lowrie singing" width='50%' />
      <p>Hello! I'm Lowrie</p>
      <Testimonials />
    </Container>
  )
}
