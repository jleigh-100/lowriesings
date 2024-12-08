import React from "react";
import styled from "styled-components";
import theme from '../theme/theme.json';

const Container = styled.div`
  display: flex;
  flex-direction: row;
	gap: 15px;
  justify-content: center;
	bottom: -2px;
	background-color: ${theme.headerFooterColor};
	padding: 20px;
`

const StyledImage = styled.img`
	width: 50px;
	height: 50px;
`;

const Footer = () => {
	return (
		<Container >
				<a href="https://www.instagram.com/lowrie_gb" target="_blank"><StyledImage src="images/instagram.png" alt="instagram logo"/></a>
				<a href="https://www.facebook.com/lowrie.gelbierbull" target="_blank"><StyledImage src="images/facebook.png" alt="facebook logo" /></a>
				<a href="https://www.tiktok.com/@lowrie_gb" target="_blank"><StyledImage src="images/tiktok.png" alt="tiktok logo" /></a>
				<a href="https://www.youtube.com/@lowriegelbier-bull" target="_blank"><StyledImage src="images/youtube.png" alt="youtube logo"/></a>
		</Container>
	)
}

export default Footer;