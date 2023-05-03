import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../App";

const Board = (props) => {
  const { title, link } = props.data;
  const [isDark, setIsDark] = useState(false);
  const { dark } = useContext(DarkContext);
  return (
    <>
      <Link to={link}>
        <div className="homebtn">
          <span className={isDark ? "menuboxDarkMode" : "menubox"}>
            {title}
          </span>
        </div>
      </Link>
    </>
  );
};

export default Board;
