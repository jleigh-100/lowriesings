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
  font-family: "Roboto";
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
       <Question>How can I book Lowrie Sings?</Question>
      <Answer>
        Please send me an email to enquire, via lowriesings@gmail.com. Please make sure to include all of the details about your wedding or event - including
        the date, venue, timings, and any special requests. I'll then send you a free quote within 48 hours. 
      </Answer>
      <Answer>
        If you are happy with the quote and would like go ahead with the booking (yay!), I'll send my booking form and 20% deposit invoice across to secure your date in my diary. Once I receive both of these back, I will then be very excited to confirm your booking!
        </Answer>
      <Question>What happens after my booking is confirmed?</Question>
        <Answer>
      I'll be in touch around one month before your wedding or event to request your song selections and to finalise your playlist. If there are any special song requests you'd like me to learn, please let me know at least two months in advance (up to three new songs are included with all wedding bookings).
        
      Around two months before your big day, we'll also arrange a phone call, video chat, or, if you're local to Bath, an in-person meeting to go over all the final details and ensure everything is going to be perfect on the day!
        
      In the meantime, please feel free to get in touch at any point if you have any questions or would like any advice. I'm here to make the process as smooth and stress-free as possible, and to make sure you're completely happy with every aspect of your music.
      </Answer>
      <Question>How much time do you need to set up?</Question>
      <Answer>
       I usually aim to arrive at least an hour before a wedding so I have plenty of time to complete my sound check and get everything set up. 
        That said, my setup only takes about 30 minutes, so I'm very happy to be flexible and adjust my arrival time if required.
      </Answer>
      <Question>Do you bring all of the equipment you need to perform?</Question>
      <Answer>
        Of course! I'll bring my own PA system (two wireless Bose S1 Pro +), as well as my microphone and all of the necessary equipment. Beccause my set up is completelyentirely wirelss, I can perform both indoors and outdoors, 
        and I can easily relocate within the venue ir required. I also have Public Liability Insurance up to £10 million. If your venue would like a copy of my certificate, just let me know and I can send it over.
      </Answer>
      <Question>Can I pick the songs from the set list?</Question>
      <Answer>
        Absolutely, I'm happy for your set list to be curated however you choose. You can select each individual song from my list to completely personalise your big day, or I can put together a playlist for you based on your preferences.
      </Answer>
      <Answer>
        I'm always happy to give advice and chat through any of your preferences, so that we can create the perfect set list together!
      </Answer>
      <Question>What if my timings change after I've booked you?</Question>
      <Answer>
        I'll always try my best to be flexible to help ensure your event runs
        as smoothly as possible. If your timings change slightly in the run up to the
        event, just let me know as soon as possible and I'm sure I can accommodate this for you.
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
