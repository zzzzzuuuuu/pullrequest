const News1r = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="news1a">
        <span className="iconr">{title}</span>
        {content}
      </div>
    </>
  );
};

export default News1r;
