import React from "react"
import styled from "styled-components"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const MessageArea = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Message = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 20px;
  `;
  
const MessageContainer = styled.div`
  min-height: 300px;  
`;

const ClientContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: end;
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

  return (
    <>
      <MessageArea>
      {testimonials.map((testimonial, index) => (
        <Message key={index} style={{ visibility: false}} className="bubble left">
          <FormatQuoteIcon style={{ height: '50px', width: '50px' }}/>
          <MessageContainer><p>{testimonial.message}</p></MessageContainer>
          <ClientContainer>{testimonial.by} - {testimonial.date}</ClientContainer>
        </Message>
      ))}
      </MessageArea>
    </>
  )
}