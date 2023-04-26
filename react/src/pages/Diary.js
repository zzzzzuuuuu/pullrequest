const Diary = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="page1">
        {title}
        <p>{content}</p>
      </div>
    </>
  );
};

export default Diary;
