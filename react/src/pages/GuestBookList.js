import GuestBook from "./GuestBook";
import "./css/guestbook.css";
import { useContext } from "react";
import { DarkContext } from "../App";

const GuestBookList = (props) => {
  const { guestbook } = props.data;
  const { isDark } = useContext(DarkContext);
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className={isDark ? "row3_guest boxDarkMode" : "row3_guest box"}>
          {guestbook
            .map((data, index) => <GuestBook data={data} key={index} />)
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default GuestBookList;
