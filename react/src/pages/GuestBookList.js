import GuestBook from "./GuestBook";
import "./css/guestbook.css";

const GuestBookList = (props) => {
  const { guestbook } = props.data;
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className="row3_guest box">
          {guestbook
            .map((data, index) => <GuestBook data={data} key={index} />)
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default GuestBookList;
