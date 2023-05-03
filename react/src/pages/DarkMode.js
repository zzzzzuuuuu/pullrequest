import { useContext } from "react";
import { DarkContext } from "../App";

const DarkMode = () => {
  const [dark, setIsDarkMode] = useContext(DarkContext);
  return (
    <>
      <button
        onClick={() => {
          setIsDarkMode(!dark);
        }}
      >
        Dark Mode
      </button>{" "}
    </>
  );
};
export default DarkMode;
