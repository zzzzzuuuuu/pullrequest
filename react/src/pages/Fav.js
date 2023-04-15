import React from "react";

const Fav = (props) => {
  return (
    <div>
      <div className={props.isDark ? "hobbyContentDarkMode" : "hobbyContent"}>
        {props.data}
      </div>
    </div>
  );
};

export default Fav;
