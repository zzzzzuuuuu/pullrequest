const Board = (props) => {
  return (
    <>
      <div className="homebtn">
        <a href="#">
          <span class="menubox">{props.data}</span>
        </a>
      </div>
    </>
  );
};

export default Board;
