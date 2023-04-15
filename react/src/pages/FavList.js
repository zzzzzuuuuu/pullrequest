import Fav from "./Fav";

const FavList = (props) => {
  const { fav } = props.data;
  return (
    <>
      <h3>Fav</h3>
      <div className="wrapHobby">
        {fav.map((data, index) => (
          <Fav data={data} key={index} isDark={props.dark} />
        ))}
      </div>
    </>
  );
};

export default FavList;
