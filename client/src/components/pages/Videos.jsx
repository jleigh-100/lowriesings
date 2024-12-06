import React from "react";
import { useWindowDimensions } from "../../hooks.js";

export const Videos = () => {
  const { width } = useWindowDimensions();
  // carosel type display of videos?
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
      {/* <iframe style={{ width: "70vw", height: "40vw" }} src="https://www.youtube.com/embed/0cBMQ6M75Pw" title="First Times - Ed Sheeran (Cover by Lowrie)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      <iframe style={{ width: `${width < 768 ? "85vw" : "70vw"}`, height: `${width < 768 ? "60vw" : "40vw"}` }} src="https://www.youtube.com/embed/8zlWegyJiAg" title="Make You Feel My Love - Adele (cover by Lowrie" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      {/* <iframe style={{ width: "20vw", height: "25vw" }} src="https://www.youtube.com/embed/bnVc4gxL_Wo" title="Everything - Michael Bublé (Cover by Lowrie)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
    </div>
  )
}
