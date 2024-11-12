import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Footer = () => {
	return (
		<Container >
			<h1>Footer</h1>
		</Container>
	)
}

export default Footer;