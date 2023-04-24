const Diary = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="page1">
        {title}
        <p>{content}</p> {/* 이거 왜 줄바꿈 안되지? 역순정렬해야됨 */}
      </div>
    </>
  );
};

export default Diary;
