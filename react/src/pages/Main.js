import "../Main.css";

import Info from "./Info";
import FavList from "./FavList";
import SpecialList from "./SpecialList";
import DarkMode from "./DarkMode";

import Data from "./Data.json";
import { useState } from "react";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  // console.log(Data);
  return (
    <>
      <div className={isDark ? "darkMode" : ""}>
        <DarkMode darkMode={setIsDark} dark={isDark} />
        <Info data={Data} dark={isDark} />
        <FavList data={Data} dark={isDark} />
        <SpecialList data={Data} dark={isDark} />
      </div>
    </>
  );
};
export default Main;
