import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
	gap: 15px;
  justify-content: center;
`
const Footer = () => {
	return (
		<Container >
				<a href="https://www.instagram.com/lowrie_gb"><img src="images/instagram.png"  width='50px' height='50px' /></a>
				<a href="https://www.facebook.com/lowrie.gelbierbull"><img src="images/facebook.png" width='50px' height='50px'/></a>
				<a href="https://www.tiktok.com/@lowrie_gb"><img src="images/tiktok.png" width='50px' height='50px'/></a>
				<a href="https://www.youtube.com/@lowriegelbier-bull" ><img src="images/youtube.png" width='50px' height='50px'/></a>
		</Container>
	)
}

export default Footer;