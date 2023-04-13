import "../css/Main.css";

const Main = (props) => {
  const { name, age, hobby } = props.data;

  return (
    <div>
      {name}
      {age}
      {hobby}
    </div>
  );
};

export default Main;
