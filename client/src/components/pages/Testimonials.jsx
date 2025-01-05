import React from "react";
import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
  background-color: lightgrey;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
`;

const MessageContainer = styled.div`
  min-height: 50px;
  max-height: 300px;
  overflow: scroll;

  /* scroll bar styling */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`;

const ClientContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: end;
`;

const StyledFormatQuoteIcon = styled(FormatQuoteIcon)`
  height: 50px;
  width: 50px;
`;

export const Testimonials = () => {
  const testimonials = [
    {
      message: "It was such a pleasure to have Lowrie's beautiful voice as the backdrop of our wedding ceremony! Lowrie is truly the most talented singer, we can't recommend her enough!",
      by: "Olivia L",
    },
    {
      message: "Our wedding ceremony was made all the more special with Lowrie's performance and many of our guests commented on her beautiful voice. Thank you, Lowrie, for making our day so special. ",
      by: "Sam S",
    },
    {
      message: "She set the perfect atmosphere for our drinks reception. She learnt a few special songs for us too. I would recommend her to anyone. ",
      by: "Kieran S",
    },
    {
      message:
        "I hired Lowrie to perform at my company Christmas party. Alongside her stunning voice, she brought fantastic energy to the night and got everyone dancing! I would definitely hire her again for future company events.",
      by: "Daisy T",
    },
    
  ];
  const { width } = useWindowDimensions();

  return (
    <MessageArea width={width}>
      {testimonials.map((testimonial, index) => (
        <Message key={index} width={width}>
          <StyledFormatQuoteIcon />
          <MessageContainer>
            <p>{testimonial.message}</p>
          </MessageContainer>
          <ClientContainer>
            {testimonial.by}
          </ClientContainer>
        </Message>
      ))}
    </MessageArea>
  );
};
