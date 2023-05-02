const News1b = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="news1a">
        <span className="iconb">{title}</span>
        {content}
      </div>
    </>
  );
};

export default News1b;
