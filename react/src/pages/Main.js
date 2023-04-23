import "./css/font.css";
import "./css/home.css";
import "./css/layout.css";

import IntroList from "./IntroList";
import Body from "./Body";
import BoardList from "./BoardList";
import Data from "./Data.json";

const Main = () => {
  console.log(Data);
  return (
    <>
      <div className="bookcover">
        <div className="bookdot">
          <div className="page">
            <div className="container">
              <IntroList data={Data} />
              <Body data={Data} />
              <BoardList data={Data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
