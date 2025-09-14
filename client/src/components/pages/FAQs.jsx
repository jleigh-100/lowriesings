import React from "react";
import styled from "styled-components";
import { Container } from "../Body.jsx";
import { SendIcon } from "../Icons.jsx";
import { useWindowDimensions } from "../../hooks.js";

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
  background: #FBEFF7;
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  > p {
    margin: 5px;
  }
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledImg = styled.img`
  ${({ divWidth }) => divWidth > 768 && 'width: 30vw;'}
  ${({ divWidth }) => divWidth > 768 && 'max-width: 500px;'}
  height: max-content;
  ${({ divWidth }) => divWidth < 768 && "max-height: 500px;"}
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledInput = styled.textarea`
  width: 100%;
  font-size: 26px;
  font-family: "Edensor";
  border: none;
  background: #FBEFF7;
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

  .send-icon {
    background: green;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    fill: white;
    height: 30px;
    width: 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: ${({ width }) => width < 768 ? 'center' : 'left'};
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${({ width }) => width < 768 ? 'column-reverse' : 'row'};
`;

const Question = ({ children }) => {
  return <Message className="question">{children}</Message>;
};
const Answer = ({ children }) => {
  return <Message className="answer">{children}</Message>;
};

const QuestionsAndAnswers = () => {
  return (
    <div style={{ marginLeft: 20, marginTop: 20 }}>
      <Question>How much time do you need to set up?</Question>
      <Answer>
        I like to arrive one hour before the event starts, so I can make sure
        everything is set up and do a sound check.
      </Answer>
      <Question>Do you bring all the equipment you need to perform?</Question>
      <Answer>
        Yes, of course! I will bring my own microphone, leads and an amp. All I
        require is a plug socket!
      </Answer>
      <Question>Can I pick the pieces you play from the set list?</Question>
      <Answer>
        Absolutely, I'm happy for your set list to be curated however you choose. You can pick each individual song from my song list or I can put together a playlist for you.
      </Answer>
      <Answer>
        I'm always happy to chat through anything so we can find the perfect set list!
      </Answer>
      <Question>What happens if my timings change after I've booked you?</Question>
      <Answer>
        I will always try my best to be flexible to help ensure your event runs
        as smoothly as possible. If timings change slightly in the run up to the
        event just let me know and I'm sure I can accommodate this for you
      </Answer>
      <Question>Which artists have you been most influenced by?</Question>
      <Answer>
        My influences range from Amy Winehouse, to Adele, to Aretha Franklin
      </Answer>
    </div>
  )
}

export const FAQs = ({ message, setMessage }) => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <h1>FAQs</h1>
      <ContentContainer width={width}>
        <ImageContainer width={width}>
          <StyledImg
            src="images/lowrie_smiling.jpg"
            alt="Photo of Lowrie smiling holding a microphone"
            divWidth={width}
          />
        </ImageContainer>
        <QuestionsAndAnswers width={width} />
      </ContentContainer>
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
            <StyledSendIcon />
          </StyledButton>
        </StyledForm>
      </TextInputContainer>
    </Container>
  );
};
