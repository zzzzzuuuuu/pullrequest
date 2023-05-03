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
import { useState, useEffect, createContext, useContext } from "react";
import { UserInfo } from "./pages/UserInfo";
import Login from "./pages/Login";
import DarkMode from "./pages/DarkMode";

export const DarkContext = createContext({
  // 초기값
  dark: false,
  // setIsDarkMode: () => {},
});

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { dark } = useContext(DarkContext);
  const setIsDarkMode = (dark) => setIsDark(!dark);

  useEffect(() => {
    localStorage.setItem("UserInfo", JSON.stringify(UserInfo));
  });

  return isLogin ? (
    <>
      <DarkContext.Provider value={(isDark, setIsDark)}>
        <DarkMode darkMode={setIsDarkMode} dark={dark} />
        <div className={dark ? "bookcoverDarkMode" : "bookcover"}>
          <div className="bookdot">
            <div className={dark ? "pageDarkMode" : "page"}>
              <div className="container">
                <IntroList data={Data} dark={dark} />
                <Routes>
                  <Route path="/" element={<Home data={Data} dark={dark} />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/diary"
                    element={<DiaryList data={Data} dark={dark} />}
                  />
                  <Route
                    path="/album"
                    element={<AlbumList data={Data} dark={dark} />}
                  />
                  <Route
                    path="/guestbook"
                    element={<GuestBookList data={Data} dark={dark} />}
                  />
                </Routes>
                <BoardList data={Data} dark={dark} />
              </div>
            </div>
          </div>
        </div>
      </DarkContext.Provider>
    </>
  ) : (
    <div className="background">
      <Login data={setIsLogin} />
    </div>
  );
}

export default App;
