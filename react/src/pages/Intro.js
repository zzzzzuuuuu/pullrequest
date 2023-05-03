import { useContext } from "react";
import { DarkContext } from "../App";
const Intro = (props) => {
  const { isDark } = useContext(DarkContext);
  return (
    <>
      <div className={isDark ? "fontWhite" : ""}>{props.data}</div>
    </>
  );
};

export default Intro;
