const Album = (props) => {
  const { title, img, content } = props.data;
  console.log(img);
  return (
    <>
      <div className="row3title_album">{title}</div>
      <div className="over">
        <img src={`${process.env.PUBLIC_URL}${img}`}></img>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Album;
