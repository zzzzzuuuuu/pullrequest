import img1 from "./img/selfie23.jpg";
import img2 from "./img/selfie3.jpg";

const Album = (props) => {
  const { title, img, content } = props.data;
  return (
    <>
      <div className="row3title_album">{title}</div>
      <div className="over">
        <img src={img}></img>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Album;
