import { useContext, useState } from "react";
import { DarkContext } from "../App";

const Album = (props) => {
  const { title, img, content } = props.data;
  const { isDark } = useContext(DarkContext);
  console.log(img);
  return (
    <>
      <div className="row3title_album">{title}</div>
      <div className={isDark ? "overDarkMode" : "over"}>
        <img src={`${process.env.PUBLIC_URL}${img}`}></img>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Album;
