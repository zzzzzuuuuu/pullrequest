import "./pages/css/font.css";
import "./pages/css/layout.css";
import "./pages/css/home.css";
import "./pages/css/profile.css";
import "./pages/css/diary.css";
import "./pages/css/album.css";
import "./pages/css/guestbook.css";

import IntroList from "./pages/IntroList";
import BoardList from "./pages/BoardList";
import Data from "./pages/Data.json";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import DiaryList from "./pages/DiaryList";
import Album from "./pages/Album";
import GuestBook from "./pages/GuestBook";

import { Route, Routes } from "react-router-dom"; // 라우터 연결

function App() {
  return (
    <div className="bookcover">
      <div className="bookdot">
        <div className="page">
          <div className="container">
            <IntroList data={Data} />
            <Routes>
              <Route path="/" element={<Home data={Data} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/diary" element={<DiaryList data={Data} />} />
              <Route path="/album" element={<Album />} />
              <Route path="/guestbook" element={<GuestBook />} />
            </Routes>
            <BoardList data={Data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
