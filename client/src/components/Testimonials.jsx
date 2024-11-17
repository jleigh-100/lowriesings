import React from "react"
import styled from "styled-components"

const MessageArea = styled.div`
  width: 60%;
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Message = styled.div`
  flex: 1;
  height: 400px;
  background-color: #D3BCCC;
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
      <h3>Here's what people have said about my singing:</h3>
      <MessageArea>
      {testimonials.map((testimonial, index) => (
        <Message key={index} style={{ visibility: false}} className="bubble left">
          "{testimonial.message}"- {testimonial.by} - {testimonial.date}
        </Message>
      ))}
      </MessageArea>
    </>
  )
}