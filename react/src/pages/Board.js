import { Link } from "react-router-dom";

const Board = (props) => {
  const { title, link } = props.data;
  return (
    <>
      <div className="homebtn">
        <a href="#">
          <span className="menubox">
            <Link to={link}>{title}</Link>
          </span>
        </a>
      </div>
    </>
  );
};

export default Board;
