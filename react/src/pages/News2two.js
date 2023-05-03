import { useContext } from "react";
import { DarkContext } from "../App";
const News2two = (props) => {
  const { title, content } = props.data;
  const { isDark } = useContext(DarkContext);
  return (
    <>
      <div className="two2">
        <span className={isDark ? "fontWhite" : ""}>{title}</span>
        <span className="cnt"> {content}</span>
        <hr className="line2"></hr>
      </div>
    </>
  );
};

export default News2two;
