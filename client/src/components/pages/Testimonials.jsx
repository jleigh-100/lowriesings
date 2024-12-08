import React from "react"
import styled from "styled-components"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { use } from "react";
import { useWindowDimensions } from "../../hooks";

const MessageArea = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: ${props => props.width < 768 ? "column" : "row"}
  width: ${props => props.width < 768 ? "70vw" : "100%"};
  margin: 30px 0;
  align-items: center;
  flex-wrap: wrap;
`;
const Message = styled.div`
  display: flex;
  flex: 1;
  height: 300px;
  min-width: 300px;
  ${props => props.width < 768 ? "width: calc(100% - 40px)" : ""};
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
  `;
  
const MessageContainer = styled.div`
  min-height: 50px;  
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
    message: "Lowrie is amazing!",
    by: "Jamie",
    date: "October 2024",
  },
  {
    message: "I love Lowrie's voice! She's so professional and talented!",
    by: "Dan",
    date: "April 2021",
  },
  {
    message: "Lowrie is the best! It makes me so happy to hear her sing!",
    by: "Andy + Sam",
    date: "December 2019",
  },
  {
    message: "Lowrie is so professional, talented and her voice is incredible!",
    by: "Mark",
    date: "December 2024",
  }
]
  const { width } = useWindowDimensions();  

  return (
      <MessageArea width={width}>
      {testimonials.map((testimonial, index) => (
        <Message key={index} width={width}>
          <StyledFormatQuoteIcon />
          <MessageContainer><p>{testimonial.message}</p></MessageContainer>
          <ClientContainer>{testimonial.by} - {testimonial.date}</ClientContainer>
        </Message>
      ))}
      </MessageArea>
  )
}