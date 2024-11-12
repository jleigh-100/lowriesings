import React from "react"
import styled from "styled-components"

const MessageArea = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2px;
  border: 1px solid #0E273C;
`;

export const Testimonials = () => {

const testimonials = [
  {
    message: "Lowrie is amazing!",
    by: "Jamie Leigh",
    date: "October 2024",
  },
  {
    message: "I love Lowrie's voice! She's so professional and talented!",
    by: "Dan Leigh",
    date: "April 2021",
  },
  {
    message: "Lowrie is the best! It makes me so happy to hear her sing!",
    by: "Andy Simpson + Sam Leigh",
    date: "December 2019",
  }
]


  return (
    <div>
      <h3>Here's what people have said about my singing:</h3>
      {testimonials.map((testimonial, index) => (
        <MessageArea key={index} style={{ visibility: false}}>
          <i>"{testimonial.message}"</i>
          <p>- {testimonial.by} - {testimonial.date}</p>
        </MessageArea>
      ))}
    </div>
  )
}