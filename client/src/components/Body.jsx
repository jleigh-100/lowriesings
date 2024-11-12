import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
const Body = () => {
    return (
      <Container>
        <h2>book her now for your wedding!</h2>
        <p>look at her in action here!</p>
        <a href='mailto:jamie.leigh100@hotmail.co.uk'>like what you see? email now!</a>
        <img src="/images/singing.jpg" alt="Lowrie singing" />
      </Container>
    )
}

export default Body;