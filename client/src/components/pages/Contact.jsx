import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks.js";

export const sendMessage = (messageText) => {
  console.log(messageText);
  if (messageText) {
    // setMessageText("");
    console.log(messageText);
    // send email
    toast.success(
      "Thanks for your message! I aim to respond to all enquiries within 24 hours.",
      { theme: "colored" },
    );
  }
};

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
  font-family: "Roboto";
  font-size: 20px;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  width: calc(90% - 22px);
  border-radius: 10px;
  font-family: "Roboto";
  font-size: 20px;
  resize: none;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 750px;
`;

export const Contact = ({ message, setMessage }) => {
  const handleClick = (e) => {
    const email = "lowriesings@gmail.com";
    const subject = "Website request";
    const toSend = message.replaceAll("\n", "%0D");
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${toSend}`);
  };
  return (
    <Container>
      <h1>Contact</h1>
      <StyledImg
        src="images/lowriebandw.jpg"
        alt="Black and white photo of Lowrie"
      />
      <p>
        I would love to hear from you! Please get in touch to let me know your name(s),
        wedding or event date and location. I aim to respond to all enquires within 48 hours & I will always let you know if I am unavailable too. Thank you so much x
      </p>
      <StyledForm onSubmit={handleClick}>
        <StyledTextArea
          placeholder="Your message here"
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <StyledInput type="submit" value="Send" />
      </StyledForm>
      <p>Alternatively, you can email me at: <a href="mailto:lowriesings@gmail.com">lowriesings@gmail.com</a> or you can reach out to me on my socials below:</p>
    </Container>
  );
};
