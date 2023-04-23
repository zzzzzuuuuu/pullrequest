import Board from "./Board";

const BoardList = (props) => {
  const { board } = props.data;
  return (
    <>
      <div className="column3">
        {board.map((data, index) => (
          <Board data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default BoardList;
