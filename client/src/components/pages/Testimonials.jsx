import React from "react";
import styled from "styled-components";
import { Quote } from "../Icons.jsx";
import { useWindowDimensions } from "../../hooks";

const MessageArea = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: ${(props) => (props.width < 768 ? "column" : "row")};
  width: 100%;
  margin: 30px 0;
  align-items: center;
  flex-wrap: wrap;
`;
const Message = styled.div`
  display: flex;
  flex: 1;
  height: 400px;
  ${(props) => (props.width < 768 ? "width: calc(100% - 40px)" : "")};
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFE0F5;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
`;

const MessageContainer = styled.div`
  min-height: 50px;
  max-height: 350px;
  overflow: scroll;

  /* scroll bar styling */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
  p {
    margin-bottom: 0;
  }
`;

const ClientContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: end;
`;

const StyledQuote = styled(Quote)`
  height: 50px;
  width: 50px;
`;

export const Testimonials = () => {
  const testimonials = [
    {
      message: "We had so many compliments on how good Lowrie was! She sang at our drinks reception and was the perfect edition to our day!",
      by: "Mia and James at Winkworth Farm, Malmesbury (28 March 2026)",
    },
    {
      message: "Lowrie is the perfect singer for the best wedding day! Thank you so much for making our day so special.",
      by: "Emilia and Nick at Priston Mill, Bath (06 December 2025)",
    },
    {
      message: "It was such a pleasure to have Lowrie's beautiful voice as the backdrop of our wedding ceremony! Lowrie is truly the most talented singer, we can't recommend her enough!",
      by: "Liv and Oliver at The Carriage Hall, Nottingham (05 October 2025)",
    },
    {
      message:
        "Lowrie performed for our Christmas party. Alongside her stunning voice, she brought fantastic energy to the night and got everyone dancing!",
      by: "DoubleTree by Hilton, Bristol (19 December 2025)",
    },
    
  ];
  const { width } = useWindowDimensions();

  return (
    <MessageArea width={width}>
      {testimonials.map((testimonial, index) => (
        <Message key={index} width={width}>
          <StyledQuote />
          <MessageContainer>
            <p>{testimonial.message}</p>
          </MessageContainer>
          <ClientContainer>
            - {testimonial.by}
          </ClientContainer>
        </Message>
      ))}
    </MessageArea>
  );
};
