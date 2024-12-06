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
  padding: 10px;
  width: calc(90% - 22px);
  border-radius: 10px;
  font-family: 'ArchitectsDaughter';
  font-size: 20px;
  resize: none;
`;

export const Contact = ({ message, setMessage }) => {
  const handleClick = (e) => {
    const email = "jamie.leigh100@hotmail.co.uk"
    const subject = "Website request";
    const toSend = message.replaceAll('\n', '%0D');
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${toSend}`);
 }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p id="contact-form">For more information or to book, please send me a message below, or using any of my socials!</p>
      <StyledForm onSubmit={handleClick}>
        <StyledTextArea
          placeholder="Your message"
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
        <StyledInput type="submit" value="Send" />
      </StyledForm>
    </div>
  )
}