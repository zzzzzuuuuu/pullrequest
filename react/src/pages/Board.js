import { Link } from "react-router-dom";

const Board = (props) => {
  const { title, link } = props.data;
  return (
    <>
      <Link to={link}>
        <div className="homebtn">
          <span className="menubox">{title}</span>
        </div>
      </Link>
    </>
  );
};

export default Board;
