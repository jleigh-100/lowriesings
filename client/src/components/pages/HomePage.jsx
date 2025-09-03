import React from "react";
import { Testimonials } from "./Testimonials.jsx";
import { useWindowDimensions } from "../../hooks.js";
import styled from "styled-components";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Container = styled.div`
  margin: 8px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
const StyledInfo = styled.div`
  ${(props) => {
    if (props.width > 768) {
      return `
        display: grid;
        grid-template-columns: 500px 3fr;
        gap: 30px;
      `;
    }
  }};
`;

const StyledMainImg = styled.img`
  border-radius: 50%;
  width: ${(props) => (props.width < 768 ? "85vw" : "500px")};
  height: ${(props) => (props.width < 768 ? "85vw" : "500px")};
`;

const StyledSubImg = styled.img`
  width: ${(props) => (props.width < 768 ? "100%" : "50%")};
  border: 1px solid black;
  border-radius: 10px;
  margin: 35px 0;
`;

const StyledLink = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;

const StyledYoutubeVideoContainer = styled.div`
width: 100%;
height: ${(props) => (props.width < 768 ? '50vw' : '25vw')};
display: flex;
flex: 1;
gap: 20px;
margin-bottom: ${(props) => (props.width < 768 ? "75px" : "0")};
flex-direction: ${(props) => (props.width < 768 ? "column" : "row")};
  .yt-lite {
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
  }
p {
  margin: ${(props) => (props.width < 768 ? '5px 0 20px' : '5px 0')};
  font-size: 20px;
  text-align: center;
}
`;

const YoutubeVideo = ({ src, title }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <LiteYouTubeEmbed
        id={src.split("/").pop()}
        title={title}
      />
      <p>{title}</p>
    </div>
  )
}

export const HomePage = ({ setCurrentPage }) => {
  const { width } = useWindowDimensions();
  // TODO: refactor based on mobile and desktop view to make it more maintainable
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <StyledInfo width={width}>
        {width < 768 && (
          <p>
            Hi, I’m Lowrie — a professional solo singer specialising in wedding and events. 
            I'm based in Bath, South West England, but I travel nationwide across the UK.
          </p>
        )}
        <StyledMainImg
          width={width}
          rel="preload"
          // loading="lazy"
          fetchPriority="high"
          src="/images/lowrie_singing_blue.jpg"
          alt="Lowrie singing"
        />
        <div>
          {width > 769 && (
            <p>
              Hi, I’m Lowrie — a professional solo singer specialising in 
              wedding and events. I'm based in Bath, South West England, 
              but I travel nationwide across the UK.
            </p>
          )}
          <p>
            As a live acoustic singer, I can create the perfect ambiance 
            for your special occasion. I perform with high-quality backing 
            tracks, and have my own professional PA system and microphone 
            to ensure excellent sound quality.

          </p>
          {width < 768 && <StyledYoutubeVideoContainer width={width}>
            <YoutubeVideo
              src="https://www.youtube.com/embed/lKodQL8kfBA"
              title="Lowrie Sings Showreel 2025"
            />
          </StyledYoutubeVideoContainer>}
          <p>
            My setlist features favourites from artists such as Adele, 
            Amy Winehouse, and Whitney Houston. I offer a diverse selection 
            of songs, ranging from timeless upbeat classics of the 1970s to 
            acoustic covers of current chart hits. I also enjoy learning new 
            songs on request to tailor the performance to the unique atmosphere 
            of your wedding or event.

          </p>
          <p>I hold a First Class degree in Music with Performance from the 
            University of Southampton. I also spent a year studying singing at 
            the Music Conservatoire in Bergen, Norway as part of my training.</p>
          {width < 768 && <StyledYoutubeVideoContainer width={width}>
            <YoutubeVideo
              src="https://www.youtube.com/embed/xCULUKBj2kQ"
              title="Isn't She Lovely - Stevie Wonder (Cover by Lowrie)"
            />
          </StyledYoutubeVideoContainer>}
          <p>
            Simply sit back, relax, and enjoy the cosy, soulful atmosphere I can 
            bring to your special day.</p>

          <StyledLink onClick={() => setCurrentPage("Contact")}>
            Get in touch today to enquire - I can't wait to hear from you and help make your day unforgettable!
          </StyledLink>
          {/* <audio controls>
            <source src="audio/Lowrie_Singing.m4a" type="audio/mp4" />
            Your browser does not support the audio element.
          </audio> */}
        </div>
      </StyledInfo>
      {width > 769 && <StyledYoutubeVideoContainer width={width}>
        <YoutubeVideo
          src="https://www.youtube.com/embed/lKodQL8kfBA"
          title="Lowrie Sings Showreel 2025"
        />
        <YoutubeVideo
          src="https://www.youtube.com/embed/xCULUKBj2kQ"
          title="Isn't She Lovely - Stevie Wonder (Cover by Lowrie)"
        />
      </StyledYoutubeVideoContainer>}
      <Testimonials />
      <StyledSubImg
        width={width}
        loading="lazy"
        src="images/lowireatawedding.jpg"
        alt="Lowrie at a wedding"
      />
    </Container>
  );
};
