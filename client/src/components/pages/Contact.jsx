import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../Body.jsx";

export const sendMessage = (messageText) => {
  console.log(messageText)
  if (messageText) {
    // setMessageText("");
    console.log(messageText);
    // send email
    toast.success("Thanks for your message! I try to response to everyone within 2 days", { theme: "colored" });
  }
}

const StyledForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-bottom: 40px;
`;

const StyledInput = styled.input`
  width: 90%;
  font-family: 'ArchitectsDaughter';
  font-size: 20px;
`;

const StyledTextArea = styled.textarea`
  width: calc(90% - 6px);
  font-family: 'ArchitectsDaughter';
  font-size: 20px;
  resize: none;
`;

export const Contact = ({ message, setMessage }) => {
  console.log(message);
  return (
    <Container>
      <h1>Contact</h1>
      <p>For more information or to book, please send me a message below, or using any of my socials!</p>
      <StyledForm action={`mailto:jamie.leigh100@hotmail.co.uk?subject=Website request&body=${message.replaceAll('\n', '%0D')}`} method="post">
        <StyledTextArea
          placeholder="Your message"
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
        <StyledInput type="submit" value="Send" />
      </StyledForm>
    </Container>
  )
}