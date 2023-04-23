import "./css/font.css";
import "./css/home.css";
import "./css/layout.css";

import Intro from "./Intro";
import Data from "./Data.json";

const Main = () => {
  console.log(Data);
  return (
    <>
      <div className="bookcover">
        <div className="bookdot">
          <div className="page">
            <div className="container">
              <Intro data={Data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
