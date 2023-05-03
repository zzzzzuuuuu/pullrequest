import News1b from "./News1b";
import News1r from "./News1r";
import News2one from "./News2one";
import News2two from "./News2two";
import img from "../img/miniroom.jpg";
import { useContext } from "react";
import { DarkContext } from "../App";

const Home = (props) => {
  const { news1b, news1r, news2one, news2two } = props.data;
  const { isDark } = useContext(DarkContext);

  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className={isDark ? "row3 boxDarkMode" : "row3 box"}>
          <div className="row3news">
            Updated News <hr className="line"></hr>
          </div>
          <div className="newsbox">
            <div className="news1">
              {news1b.map((data, index) => (
                <News1b data={data} key={index} />
              ))}
              {news1r.map((data, index) => (
                <News1r data={data} key={index} />
              ))}
            </div>
            <div className="news2">
              <div className="news2one">
                {news2one.map((data, index) => (
                  <News2one data={data} key={index} />
                ))}
              </div>
              <div className="news2two">
                {news2two.map((data, index) => (
                  <News2two data={data} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="row3main">
            Miniroom<hr className="line"></hr>
            <img className="img" src={img} alt="미니룸"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
