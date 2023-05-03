import { useContext } from "react";
import { DarkContext } from "../App";

const DarkMode = () => {
  const { isDark, setIsDarkMode } = useContext(DarkContext);
  console.log(isDark);
  return (
    <>
      <button
        onClick={() => {
          setIsDarkMode(!isDark);
        }}
      >
        Dark Mode
      </button>{" "}
    </>
  );
};
export default DarkMode;
