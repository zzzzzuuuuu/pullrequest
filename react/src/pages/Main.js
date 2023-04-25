import "./css/font.css";
import "./css/layout.css";
import "./css/home.css";
import "./css/profile.css";
import "./css/diary.css";
import "./css/album.css";
import "./css/guestbook.css";

import IntroList from "./IntroList";
// import Body from "./Body";
import BoardList from "./BoardList";
import Home from "./Home";
import Profile from "./Profile";
import DiaryList from "./DiaryList";
import Album from "./Album";
import GuestBook from "./GuestBook";
import Data from "./Data.json";

const Main = () => {
  console.log(Data);
  return (
    <>
      {/* <div className="bookcover">
        <div className="bookdot">
          <div className="page">
            <div className="container">
              <IntroList data={Data} /> */}
      {/* <Home data={Data} /> */}
      {/* <Profile /> */}
      <DiaryList data={Data} />
      {/* <Album /> */}
      {/* <GuestBook /> */}
      {/* <BoardList data={Data} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Main;
