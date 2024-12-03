import React from "react"
import { Container } from "../Body.jsx"
import { Testimonials } from "../Testimonials.jsx"
import { useWindowDimensions } from "../../hooks.jsx"

export const HomePage = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <h1>Home</h1>
      <img src="/images/shadowylowrie.jpg" alt="Lowrie singing" width={`${width >= 768 ? '50%' : '100%'}`} />
      <p>Hello! I'm Lowrie, welcome to my website! I am a singer</p>
      <Testimonials />
    </Container>
  )
}
