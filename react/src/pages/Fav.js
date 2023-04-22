const Fav = (props) => {
  return (
    <>
      <div className={props.isDark ? "hobbyContentDarkMode" : "hobbyContent"}>
        {props.data}
      </div>
    </>
  );
};

export default Fav;
