import React from "react";
import { useWindowDimensions } from "../../hooks.js";
import styled from "styled-components";

const StyledIframe = styled.iframe`
  width: ${(props) => (props.width < 768 ? "60vw" : "50vw")};
  height: ${(props) => (props.width < 768 ? "40vw" : "30vw")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Videos = () => {
  const { width } = useWindowDimensions();
  // carosel type display of videos?
  return (
    <Container>
      <StyledIframe
        width={width}
        src="https://www.youtube.com/embed/8zlWegyJiAg"
        title="Make You Feel My Love - Adele (cover by Lowrie)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></StyledIframe>
    </Container>
  );
};
