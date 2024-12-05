import React from "react"
import { Testimonials } from "./Testimonials.jsx"
import { useWindowDimensions } from "../../hooks.jsx"
import styled from "styled-components"
import { Contact } from "./Contact.jsx"
import { Videos } from "./Videos.jsx"

const Container = styled.div`
  margin: 8px;
  padding: 20px;
  display: flex;
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
export const HomePage = ({ message, setMessage }) => {
  const { width } = useWindowDimensions();
  if (width < 768) { // mobile
    return (
      <Container>
          <p>I'm Lowrie, a 27 year old female solo singer, based in Bath (South West England) - I perform with top-quality backing tracks at weddings and events.</p>
          <p>My favourite songs to sing includes Adele, Amy Winehouse and Alicia Keys. I absolutely love to perform a wide range of music, spanning from the 1980's to current chart hits. I also love learning new songs on request and discovering new tunes.</p>
          <img src="/images/shadowylowrie.jpg" alt="Lowrie singing" width={`${width >= 768 ? '50%' : '100%'}`} style={{ borderRadius: '50%' }} />
          <p>I have a First Class degree in Music with Performance from the University of Southampton. During my time at University, I also studied specialised singing for one year in Norway.</p>
          <p>I have my own portable PA system and microphone.</p>
          <p>Sit back, relax, and let me bring the cosy, acoustic vibes to your special day or memorable event. It doesn't matter how big or small, music is so integral to any event.</p>
          <p>If I cannot wait to hear from you and be a part of your day!</p>
        <Testimonials />
      </Container>
    )
  }
  else { // desktop
    return (
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
          <img src="/images/shadowylowrie.jpg" alt="Lowrie singing" style={{ width: 500, height: 500, borderRadius: '50%' }} />
          <div style={{ padding: '0 30px' }}>
            <p>I'm Lowrie, a 27 year old female solo singer, based in Bath (South West England) - I perform with top-quality backing tracks at weddings and events.</p>
            <p>My favourite songs to sing includes Adele, Amy Winehouse and Alicia Keys. I absolutely love to perform a wide range of music, spanning from the 1980's to current chart hits. I also love learning new songs on request and discovering new tunes.</p>
            <p>I have a First Class degree in Music with Performance from the University of Southampton. During my time at University, I also studied specialised singing for one year in Norway.</p>
            <p>I have my own portable PA system and microphone.</p>
            <p>Sit back, relax, and let me bring the cosy, acoustic vibes to your special day or memorable event. It doesn't matter how big or small, music is so integral to any event.</p>
            <p>I cannot wait to hear from you and be a part of your day! <a style={{ color: 'inherit' }} href="#contact-form">Get in touch</a></p>
          </div>
        </div>
        <Testimonials />
        <Videos />
        <Contact message={message} setMessage={setMessage} />
      </Container>
    )
  }
}
