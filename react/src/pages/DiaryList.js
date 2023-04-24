import Diary from "./Diary";
import "./css/diary.css";

const DiaryList = (props) => {
  const { diary } = props.data;
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className="row3 box">
          <div className="row3title_diary">
            <div className="date">
              {" "}
              04.24
              <br />
              MON
            </div>
            <div className="date2">
              <div className="date31 blueday">1</div>
              <div className="date31 redday">2</div>
              <div className="date31">3</div>
              <div className="date31">4</div>
              <div className="date31">5</div>
              <div className="date31">6</div>
              <div className="date31">7</div>
              <div className="date31 blueday">8</div>
              <div className="date31 redday">9</div>
              <div className="date31">10</div>
              <div className="date31">11</div>
              <div className="date31">12</div>
              <div className="date31">13</div>
              <div className="date31">14</div>
              <div className="date31 blueday">15</div>
              <div className="date31 redday">16</div>
              <div className="date31">17</div>
              <div className="date31">18</div>
              <div className="date31">19</div>
              <div className="date31">20</div>
              <div className="date31">21</div>
              <div className="date31 blueday">22</div>
              <div className="date31 redday">23</div>
              <div className="date31">24</div>
              <div className="date31">25</div>
              <div className="date31">26</div>
              <div className="date31">27</div>
              <div className="date31">28</div>
              <div className="date31 blueday">29</div>
              <div className="date31 redday">30</div>
            </div>
          </div>
          <div className="over">
            {diary.map((data, index) => (
              <Diary data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryList;
