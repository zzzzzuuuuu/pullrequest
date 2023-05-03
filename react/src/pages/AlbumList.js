import Album from "./Album";
import "./css/album.css";
import { useContext } from "react";
import { DarkContext } from "../App";

const AlbumList = (props) => {
  const { album } = props.data;
  const { isDark } = useContext(DarkContext);
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className={isDark ? "row3_album boxDarkMode" : "row3_album box"}>
          {album.map((data, index) => (
            <Album data={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AlbumList;
