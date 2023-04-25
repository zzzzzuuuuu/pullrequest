import Main from "./pages/Main";
import IntroList from "./pages/IntroList";
import BoardList from "./pages/BoardList";
import Data from "./pages/Data.json";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import DiaryList from "./pages/DiaryList";
import Album from "./pages/Album";
import GuestBook from "./pages/GuestBook";

import { Route, Routes } from "react-router-dom"; // 여기까지 함

function App() {
  return (
    <Routes>
      <div className="bookcover">
        <div className="bookdot">
          <div className="page">
            <div className="container">
              <IntroList data={Data} />
              {/* <Home data={Data} /> */}
              <Route path="/" element={<Home data={Data} />} />
              <Route path="/" element={<Profile />} />
              <Route path="/" element={<DiaryList data={Data} />} />
              <Route path="/" element={<Album />} />
              <Route path="/" element={<GuestBook />} />
              <BoardList data={Data} />
            </div>
          </div>
        </div>
      </div>
    </Routes>
  );
}

export default App;
