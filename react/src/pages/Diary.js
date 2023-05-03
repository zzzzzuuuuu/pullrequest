import "./css/layout.css";
import { useContext } from "react";
import { DarkContext } from "../App";
const Diary = (props) => {
  const { title, content } = props.data;
  const { isDark } = useContext(DarkContext);

  return (
    <>
      <div className={isDark ? "page1DarkMode" : "page1"}>
        {title}
        <p>{content}</p>
      </div>
    </>
  );
};

export default Diary;
