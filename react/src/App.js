import "./pages/css/font.css";
import "./pages/css/layout.css";
import "./pages/css/home.css";
import "./pages/css/profile.css";
import "./pages/css/diary.css";
import "./pages/css/album.css";
import "./pages/css/guestbook.css";
import "./pages/css/Login.css";

import IntroList from "./pages/IntroList";
import BoardList from "./pages/BoardList";
import Data from "./pages/Data.json";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import DiaryList from "./pages/DiaryList";
import AlbumList from "./pages/AlbumList";
import GuestBookList from "./pages/GuestBookList";

import { Route, Routes } from "react-router-dom"; // 라우터 연결
import { useState, useEffect } from "react";
import { UserInfo } from "./pages/UserInfo";
import Login from "./pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("UserInfo", JSON.stringify(UserInfo));
  });

  return isLogin ? (
    <div className="bookcover">
      <div className="bookdot">
        <div className="page">
          <div className="container">
            <IntroList data={Data} />
            <Routes>
              <Route path="/" element={<Home data={Data} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/diary" element={<DiaryList data={Data} />} />
              <Route path="/album" element={<AlbumList data={Data} />} />
              <Route
                path="/guestbook"
                element={<GuestBookList data={Data} />}
              />
            </Routes>
            <BoardList data={Data} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="background">
      <Login data={setIsLogin} />
    </div>
  );
}

export default App;
