const News2two = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="two2">
        {title}
        <span className="cnt"> {content}</span>
        <hr className="line2"></hr>
      </div>
    </>
  );
};

export default News2two;
