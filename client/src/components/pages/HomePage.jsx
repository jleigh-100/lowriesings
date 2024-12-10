import React from "react"
import { Testimonials } from "./Testimonials.jsx"
import { useWindowDimensions } from "../../hooks.js"
import styled from "styled-components"
import { Contact } from "./Contact.jsx"
import { Videos } from "./Videos.jsx"

const Container = styled.div`
  margin: 8px;
  padding: 0 20px;
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
const StyledInfo = styled.div`
  ${props => {
    if (props.width > 768) { // desktop
      return `
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 30px;
      `
    }
  }};
`

const StyledMainImg = styled.img`
  border-radius: 50%;
  width: ${props => props.width < 768 ? '85vw' : '500px'};
  height: ${props => props.width < 768 ? '85vw' : '500px'};
`;


const StyledSubImg = styled.img`
  width: ${props => props.width < 768 ? '100%' : '50%'};
  border: 1px solid black;
  border-radius: 10px;
`;
export const HomePage = ({ message, setMessage, setCurrentPage }) => {
  const { width } = useWindowDimensions();
    return (
      <Container>
        <h1>Welcome to Lowrie Sings</h1>
        <StyledInfo width={width}>
          {width < 768 && <p>I'm Lowrie, a 27 year old female solo singer, based in Bath (South West England) - I perform with top-quality backing tracks at weddings and events.</p>}
          <StyledMainImg width={width} src="/images/shadowylowrie.jpg" alt="Lowrie singing" />
          <div>
            {width >= 768 && <p>I'm Lowrie, a 27 year old female solo singer, based in Bath (South West England) - I perform with top-quality backing tracks at weddings and events.</p>}
            <p>My favourite songs to sing includes Adele, Amy Winehouse and Alicia Keys. I absolutely love to perform a wide range of music, spanning from the 1960's to current chart hits. I also love learning new songs on request and discovering new tunes.</p>
            <p>I have a First Class degree in Music with Performance from the University of Southampton. During my time at University, I also studied specialised singing for one year in Norway.</p>
            <p>I have my own portable PA system and microphone.</p>
            <p>Sit back, relax, and let me bring the cosy, acoustic vibes to your special day or memorable event. It doesn't matter how big or small, music is so integral to any event.</p>
            <p onClick={() => setCurrentPage('Contact')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>I cannot wait to hear from you and be a part of your special day!</p>
          </div>
          </StyledInfo>
        <Testimonials />
        <StyledSubImg width={width} src="images/lowireatawedding.jpg" alt="Lowrie at a wedding" />
      </Container>
    )
  }
