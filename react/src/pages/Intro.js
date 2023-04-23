const Intro = (props) => {
  const { Intro } = props.data;
  return (
    <>
      <div className="row0">
        Today <span className="cnt">15</span> | TOTAL 230325
      </div>
      <div className="row1 box">
        <div className="row1a">
          <img src="./img/selfie12.jpg" width="190px"></img>
        </div>
        <div className="row1b">
          {Intro.map((data, index) => (
            <Intro data={data} key={index} />
          ))}
        </div>
        <div className="row1c">안지유 (♀)</div>
        <div className="row1d">
          <select name="site">
            <option value="#">파도타기</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Intro;
