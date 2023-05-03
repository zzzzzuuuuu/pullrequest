import { useContext } from "react";
import { DarkContext } from "../App";

const News1b = (props) => {
  const { title, content } = props.data;
  const { isDark } = useContext(DarkContext);

  return (
    <>
      <div className="news1a">
        <span className="iconb">{title}</span>
        <span className={isDark ? "fontWhite" : ""}>{content}</span>
      </div>
    </>
  );
};

export default News1b;
