import img1 from "./img/selfie23.jpg";
import img2 from "./img/selfie3.jpg";

const Album = () => {
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className="row3_album box">
          <div className="row3title_album">☆아기사자가될그날까지★</div>
          <div className="over">
            <img src={img1} alt="나"></img>
            <p>
              난ㅈㅣ금미쳐ㄱㅏ고있ㄷr... 멋ㅅr에 내 모든 몸과 영혼을 맡겼ㄷr...
              <br />
              이게 ㅂr로 지금의 ㄴrㄷr...★
            </p>
          </div>
          <div className="row3title_album">다운받을사람다운받아가ㅋ</div>
          <div className="over">
            <img src={img2} alt="나"></img>
            <p>위에도있다</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
