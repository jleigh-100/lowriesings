import React from "react"
import styled from "styled-components"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const MessageArea = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Message = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #E9ECEF;
  background-color: #6C757D;
  border-radius: 10px;
  padding: 20px;
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
  }
]


  return (
    <>
      <MessageArea>
      {testimonials.map((testimonial, index) => (
        <Message key={index} style={{ visibility: false}} className="bubble left">
          <FormatQuoteIcon style={{ height: '50px', width: '50px' }}/>
          <p>"{testimonial.message}"</p>
          {testimonial.by}- {testimonial.date}
        </Message>
      ))}
      </MessageArea>
    </>
  )
}