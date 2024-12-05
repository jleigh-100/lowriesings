import React from "react";
import { Container } from "../Body.jsx";

export const Videos = () => {
  return (
    <Container>
      <h1>Videos</h1>
      <iframe style={{ width: "75vw", height: "50vw" }} src="https://www.youtube.com/embed/0cBMQ6M75Pw" title="First Times - Ed Sheeran (Cover by Lowrie)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe style={{ width: "75vw", height: "50vw" }} src="https://www.youtube.com/embed/8zlWegyJiAg" title="Make You Feel My Love - Adele (cover by Lowrie" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe style={{ width: "75vw", height: "50vw" }} src="https://www.youtube.com/embed/bnVc4gxL_Wo" title="Everything - Michael Bublé (Cover by Lowrie)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  
    </Container>
  )
}
