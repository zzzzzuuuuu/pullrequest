const News2one = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="one1">
        {title}
        <span className="cnt"> {content}</span>
        <hr className="line2"></hr>
      </div>
    </>
  );
};

export default News2one;
