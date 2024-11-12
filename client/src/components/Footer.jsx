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
			<div>
				<p>instagram: @lowriesings</p>
				<p>facebook: @lowriesings</p>
			</div>
		</Container>
	)
}

export default Footer;