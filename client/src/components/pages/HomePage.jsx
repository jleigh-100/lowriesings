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
const StyledInfo = styled.div`
  ${(props) => {
    if (props.width > 768) {
      return `
        display: grid;
        grid-template-columns: 1fr 3fr;
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
gap: 20px;
flex-direction: ${(props) => (props.width < 768 ? "column" : "row")};
  .yt-lite {
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
  }
`;

const YoutubeVideo = ({ src, title }) => {
  return (
    <LiteYouTubeEmbed
      id={src.split("/").pop()}
      title={title}
    >
    </LiteYouTubeEmbed>
  )
}

export const HomePage = ({ setCurrentPage }) => {
  const { width } = useWindowDimensions();
  // TODO: refactor based on mobile and desktop view to make it more maintainable
  return (
    <Container>
      <h1 style={{ textAlign:"center" }}>About Me</h1>
      <StyledInfo width={width}>
        {width < 768 && (
          <p>
            I'm Lowrie, a 28 year old female solo singer, based in Bath (South
            West England) - I perform with top-quality backing tracks at
            weddings and events.
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
              I'm Lowrie, a 28 year old female solo singer, based in Bath (South
              West England) - I perform with top-quality backing tracks at
              weddings and events.
            </p>
          )}
          <p>
            My favourite songs to sing includes Adele, Amy Winehouse and Alicia
            Keys. I absolutely love to perform a wide range of music, spanning
            from the 1960's to current chart hits. I also love learning new
            songs on request and discovering new tunes.
          </p>
          {width < 768 && <StyledYoutubeVideoContainer width={width}>
              <YoutubeVideo
                src="https://www.youtube.com/embed/lKodQL8kfBA"
                title="Valerie - Amy Winehouse (Cover by Lowrie)"
              />
            </StyledYoutubeVideoContainer>}
          <p>
            I have a First Class degree in Music with Performance from the
            University of Southampton. During my time at University, I also
            studied specialised singing for one year in Norway.
          </p>
          <p>I have my own portable PA system and microphone.</p>
          {width < 768 && <StyledYoutubeVideoContainer width={width}>
              <YoutubeVideo
                src="https://www.youtube.com/embed/bnVc4gxL_Wo"
                title="Everything - Michael Bublé (Cover by Lowrie)"
              />
            </StyledYoutubeVideoContainer>}
          <p>
            Sit back, relax, and let me bring the cosy, acoustic vibes to your
            special day or memorable event. It doesn't matter how big or small,
            music is so integral to any event.
          </p>
          <StyledLink onClick={() => setCurrentPage("Contact")}>
            I cannot wait to hear from you and be a part of your special day!
          </StyledLink>
          {/* <audio controls>
            <source src="audio/Lowrie_Singing.m4a" type="audio/mp4" />
            Your browser does not support the audio element.
          </audio> */}
        </div>
      </StyledInfo>
      {width > 769 && <StyledYoutubeVideoContainer width={width}>
        <YoutubeVideo
          src="https://www.youtube.com/embed/D6hvEztdGZs"
          title="Valerie - Amy Winehouse (Cover by Lowrie)"
        />
        <YoutubeVideo
            src="https://www.youtube.com/embed/bnVc4gxL_Wo"
            title="Everything - Michael Bublé (Cover by Lowrie)"
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
