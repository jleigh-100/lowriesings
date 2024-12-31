import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../Body.jsx";
import SendIcon from "@mui/icons-material/Send";
import { sendMessage } from "./Contact.jsx";

const Message = styled.div`
  font-size: 20px;
  align-self: start;
  &.question {
    font-style: italic;
    font-size: 30px;
    padding-bottom: 10px;
  }
  &.answer {
    padding-bottom: 30px
  }
`;

const TextInputContainer = styled.div`
  margin: 0 30px;
  width: 90%;
  background: #f6f5ee;
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  > p {
    margin: 5px;
  }
  padding: 10px;
`;

const StyledInput = styled.textarea`
  width: 100%;
  font-size: 26px;
  font-family: "Edensor";
  border: none;
  background: #f6f5ee;
  resize: none;
`;

const StyledSendIcon = styled(SendIcon)`
  background: green;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const StyledButton = styled.button`
  background: inherit;
  border: none;
  padding-top: 10px;
`;

const Question = ({ children }) => {
  return <Message className="question">{children}</Message>;
};
const Answer = ({ children }) => {
  return <Message className="answer">{children}</Message>;
};

export const FAQs = ({ message, setMessage }) => {

  return (
    <Container>
      <h1>FAQs</h1>
      <Question>How much time do you need to set up?</Question>
      <Answer>
        I like to arrive one hour before the event starts, so I can make sure
        everything is set up and do a sound check.
      </Answer>
      <Question>
        Can you provide an iPod/DJ service before and between your sets?
      </Question>
      <Answer>Absolutely, I can keep music playing between sets</Answer>
      <Question>Can you learn specific pieces before the event?</Question>
      <Answer>
        If a song isn't included in my song list, I am happy to learn up to two
        new songs for your event free of charge. If you would like me to learn
        more than two there will be an extra fee, which was can discuss
        depending on the number of extra songs.
      </Answer>
      <Question>Do you bring all the equipment you need to perform?</Question>
      <Answer>
        Yes, of course! I will bring my own microphone, leads and an amp. All I
        require is a plug socket!
      </Answer>
      <Question>Can I pick the pieces you play from the set list?</Question>
      <Answer>
        Absolutely, I'm happy for your set list to be curated however you
        choose. You can pick any number of the songs from my song list.
      </Answer>
      <Answer>
        Alternatively, if you give me a few artists/genres you like then I can
        curate your set list from there. I'm always happy to chat through
        anything so we can find the perfect set list!
      </Answer>
      <Question>What if my timings change after I've booked you?</Question>
      <Answer>
        I will always try my best to be flexible to help ensure your event runs
        as smoothly as possible. If timings change slightly in the run up to the
        event just let me know and I'm sure I can accommodate this for you
      </Answer>
      <Question>Which artists have you been most influenced by?</Question>
      <Answer>
        My influences range from Amy Winehouse, to Adele, to Yebba
      </Answer>
      <p>If you have any more questions, feel free to ask below!</p>
      <TextInputContainer>
        <StyledForm
          action={`mailto:lowriesings@gmail.com?subject=Website request&body=${message.replaceAll("\n", "%0D")}`}
          method="post"
        >
          <StyledInput
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <StyledButton type="submit">
            <StyledSendIcon sx={{ height: 30, width: 30, fill: "#F6F5EE" }} />
          </StyledButton>
        </StyledForm>
      </TextInputContainer>
    </Container>
  );
};
