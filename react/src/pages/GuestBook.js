import { useContext, useState } from "react";
import { DarkContext } from "../App";

const GuestBook = (props) => {
  const { number, img, title, content } = props.data;
  const { isDark } = useContext(DarkContext);

  return (
    <>
      <div className="row3title_guest">
        {number}
        <span className="cnt2">{title}</span>
      </div>
      <div className={isDark ? "over_guestDarkMode" : "over_guest"}>
        <img src={`${process.env.PUBLIC_URL}${img}`}></img>
        <p>{content}</p>
      </div>
    </>
  );
};

export default GuestBook;
