import Intro from "./Intro";
import img from "../img/selfie12.jpg";
import { useContext, useState } from "react";
import { DarkContext } from "../App";

const IntroList = (props) => {
  const { intro } = props.data;
  const [like, setLike] = useState(0);

  return (
    <>
      <div className="column1">
        <div className="row0">
          TODAY <span className="cnt">15</span> | TOTAL 230325
        </div>
        <div className="row1 box">
          <div className="row1a">
            <img src={img} width="190px"></img>
          </div>
          <div className="row1b">
            {intro.map((data, index) => (
              <Intro data={data} key={index} />
            ))}
          </div>
          <div className="row1d">
            {" "}
            {/* 하트 누르면 좋아요 수가 올라감! */}
            <span
              onClick={() => {
                setLike(like + 1);
              }}
            >
              🩷+
            </span>
            {like}
          </div>
          <div className="row1c">안지유 (♀)</div>
          <div>
            <select name="site">
              <option value="#">파도타기</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroList;
