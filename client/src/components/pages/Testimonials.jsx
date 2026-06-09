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
    margin-bottom: 40px;
    margin-top: 20px;
  }
`;

const ClientContainer = styled.div`
  min-height: 50px;
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
      message: "Lowrie brought such a beautiful vibe to our wedding and so many of our guests commented on how amazing she was. We would recommend her in a heartbeat!",
      by: "Chandni and Rahul at Manor By The Lake (02 May 2026)",
    },
    {
      message: "We had so many compliments on how good Lowrie was! She was the perfect edition to our wedding drinks reception!",
      by: "Mia and James at Winkworth Farm (28 March 2026)",
    },
    {
      message: "Lowrie is the perfect singer for the best wedding day! Thank you so much for making our day so special.",
      by: "Emilia and Nick at Priston Mill (06 December 2025)",
    },
    {
      message:
        "Lowrie sang for our vow renewal ceremony and she was fabulous! We truly had the best day and would definitely book Lowrie again.",
      by: "Amy, The Hilton in Bristol (19 October 2025)"    
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
