const Info = (props) => {
  const { name, birthday, age, id, department, part, mbti, fav, special } =
    props.data;
  return (
    <>
      <h3>INFO</h3>
      <div className={props.dark ? "introContentDarkMode" : "introContent"}>
        <p>{name}</p>
        <p>생일 : {birthday}</p>
        <p>나이 : {age}</p>
        <p>학번 : {id}</p>
        <p>학과 : {department}</p>
        <p>파트 : {part}</p>
        <p>MBTI : {mbti}</p>
      </div>
    </>
  );
};

export default Info;
