import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
padding: 5px;
flex-direction: column;
`

const TypeGroup = styled.div`
background-color: lightgray;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 30px;
padding-bottom: 1%; 
margin-bottom: 20px;
width: 95%;
`;

const performances = [
  {
    name: "Short performance (Up to 15 minutes)",
    price: 100
  },
  {
    name: "Up to 1 hour",
    price: 160
  },
  {
    name: "Up to 2 hours",
    price: 275
  },
  {
    name: "Up to 3 hours",
    price: 375
  },
]

const packages = [

  {
    name: "Wedding Ceremony",
    description: "This includes two songs before the service begins, music during the signing of the register, and music as guests leave.",
    price: 175
  },
  {
    name: "Drinks Reception",
    description: "Two performances of up to 45 mins each during your drinks reception.",
    price: 300
  },
  {
    name: "Wedding ceremony + Drinks reception",
    description: "- Music before the service begins, music during the signing of the register, and music as guests leave.\n- 2 x 45 min performances at the drinks reception.",
    price: 375
  }
]

const StyledPackage = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10;
  width: 85%;
`;

export const PriceList = () => {
  return (
      <Container>
        <h1>Price List</h1>
        <>
        <h4>All prices include:</h4>
        <p>- PA equipment, a video conversation (if required), and learning up to three new songs.</p>
        <p>- Travel up to 20 miles including, thereafter mileage will be charged at the standard rate of 45p per mile</p>
        <p>- Public liability insurance of £10 million</p>
        </>
        
        <TypeGroup>
        <h3>Wedding packages</h3>
        {packages.map((p, i) => (
          <StyledPackage key={i}>
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <p>£{p.price}</p>
          </StyledPackage>
        ))}
        </TypeGroup>

        <TypeGroup>
        <h3>Performances</h3>
        {performances.map((p, i) => (
          <StyledPackage key={i}>
            <h4>{p.name}</h4>
            <p>£{p.price}</p>
          </StyledPackage>
        ))}
        </TypeGroup>
        </Container>
  )
}