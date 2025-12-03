import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks";

const Container = styled.div`
  display: flex;
  margin: 0 15px;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  min-width: 340px;
`;

const Header = styled.h3`
  font-size: 40px;
`;

const StyledWeddingContainer = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: ${(props) => (props.width < 768 ? "column" : "row")};
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  align-self: center; 
  border-radius: 30px;
  justify-content: space-around;
  margin-bottom: 20px;
  width: max-content;
  max-width: ${(props) => {
    if (props.width < 768) return "350px"
    if (props.width < 1150) return "744px"
    if (props.width < 1900) return "1096px"
    return "1840px"
  }
  };
`;

const StyledPackage = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  max-width: 330px;
  width: 100%;
`;

const StyledPerformanceContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.width < 768 ? 'column' : 'row'};
  gap: 20px;
  align-items: center;
`;

const StyledPerformancePackage = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  max-width: 330px;
  height: 200px;
  width: ${props => props.width < 768 ? "100vw" : '25vw'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledImg = styled.img`
width: 100%;
`;

const performances = [
  {
    name: "1 hour",
    price: 180,
  },
  {
    name: "2 hours",
    price: 260,
  },
  {
    name: "3 hours",
    price: 340,
  },
];

const packages = [
  {
    name: "Ceremony Package",
    img: "images/packages/ceremony.jpeg",
  },
  {
    name: "Drinks Reception Package",
    img: "images/packages/drinksreception.jpeg",
  },
  {
    name: "Ceremony and Drinks Reception Package",
    img: "images/packages/ceremonyanddrinks.jpeg",
  },
  {
    name: "Wedding Breakfast Package",
    img: "images/packages/diamond.jpeg",
  },
  {
    name: "Anything else?",
    img: "images/packages/anythingelse.jpeg",
  },
];

const StyledPhoto = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 750px;
`;

export const PriceList = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <h1>Price List</h1>
      <>
        <h4>All prices include:</h4>
        <p>- Use of my wireless PA system (I have two Bose S1 Pro+ Speakers) and a microphone</p>
         <p>
          - A video or phone consultation (or an in-person meet up over coffee, if we're local!)
        </p>
        <p>
          - Travel costs up to 15 miles from Bath. Beyond that, mileage is charged at the standard rate of 45p per mile (I will happily trave further afield!)
        </p>
        <p>- Public Liability Insurance of up to £10 million</p>
      </>
      <StyledPhoto
        src="images/lowrie_lights.jpg"
        alt="Photo of Lowrie with lights in the background"
      />
      <Header>Wedding Packages</Header>
      <StyledWeddingContainer width={width}>
        {packages.map((p, i) => (
          <StyledPackage key={i} width={width}>
            <StyledImg src={p.img} alt={p.name} />
          </StyledPackage>
        ))}
      </StyledWeddingContainer>

      <Header>Other events</Header>
      <p>If you're looking for a singer for your:
        - Corporate event
        - Birthday party
        - Baby shower
        - Anniversary
        - Christmas party
        - Or absolutely anything else - please get in touch!
        
        I usually charge an hourly fee for these events (plus travel costs where applicable)</p>
      <StyledPerformanceContainer width={width}>
        {performances.map((p, i) => (
          <StyledPerformancePackage key={i} width={width}>
            <h4>{p.name}</h4>
            <p>From £{p.price}</p>
          </StyledPerformancePackage>
        ))}
      </StyledPerformanceContainer>
    </Container>
  );
};
