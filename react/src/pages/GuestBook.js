import img1 from "./img/lioncat.png";
import img2 from "./img/cat1.png";
import img3 from "./img/baby-lion.jpg";

const GuestBook = () => {
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className="row3_guest box">
          <div className="row3title_guest">
            No.3 <span className="cnt2">냥이언</span>
          </div>
          <div className="over_guest">
            <img src={img1} alt="냥이언"></img>
            <p>🦁 걸어봐 위엄 like a 라이옹 🦁</p>
          </div>
          <div className="row3title_guest" style={{ marginTop: "-20px" }}>
            No.2 <span className="cnt2">아기 고양이</span>
          </div>
          <div className="over_guest">
            <img src={img2} alt="고양이"></img>
            <p>오늘은 코딩이 좀 잘 된다냥😼</p>
          </div>
          <div className="row3title_guest" style={{ marginTop: "-20px" }}>
            No.1 <span className="cnt2">멋쟁이진짜아기사자</span>
          </div>
          <div className="over_guest">
            <img src={img3} alt="아기사자"></img>
            <p>잘 보고 가요~^^ 제 친구가 되어주세요 어흥 🦁</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestBook;
