import React from "react";
import { Container } from "../Body.jsx";

export const Videos = () => {
  return (
    <Container>
      <h1>Videos</h1>
      <iframe style={{ width: "50vw", height: "50vw" }} src="https://www.youtube.com/embed/0cBMQ6M75Pw" title="First Times - Ed Sheeran (Cover by Lowrie)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe style={{ width: "50vw", height: "50vw" }} src="https://www.youtube.com/embed/8zlWegyJiAg" title="Make You Feel My Love - Adele (cover by Lowrie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe style={{ width: "50vw", height: "50vw" }} src="https://www.youtube.com/embed/bnVc4gxL_Wo" title="Everything - Michael Bublé (Cover by Lowrie)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
    </Container>
  )
}
