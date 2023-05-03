import { useContext, useState } from "react";
import { DarkContext } from "../App";
import Board from "./Board";

const BoardList = (props) => {
  const { board } = props.data;
  const [isDark, setIsDark] = useState(false);
  const { dark } = useContext(DarkContext);
  return (
    <>
      <div className="column3">
        {board.map((data, index) => (
          <Board data={data} key={index} isDark={props.dark} />
        ))}
      </div>
    </>
  );
};

export default BoardList;
