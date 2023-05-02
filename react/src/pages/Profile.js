import img from "../img/profilepic.jpg";

const Profile = () => {
  return (
    <>
      <div className="column2">
        <div className="row2">
          <div className="c1">★☆ㅈl유's homepage☆★</div>
          <div className="c2">http://www.mjworld.com/jyurang</div>
        </div>
        <div className="row3 box">
          <div className="over">
            <img src={img} width="70%" alt="나"></img>
            <p>
              안녕하세요! 저는 명지대학교 정보통신공학과 20학번 안지유라고
              합니다 :D <br />
              결과를 출력하여 시각적으로 바로 확인할 수 있다는 점에서
              프론트엔드에 흥미를 느꼈고,
              <br />
              현재 프론트엔드 위주로 공부하고 있습니다.
            </p>
            <p>
              기록하는 것을 좋아해서 현재 깃허브와 벨로그, 노션에 기록하면서
              혼자 공부하고 있습니다.
            </p>
            <p>
              저는 소속감과 유대감에서 나오는 에너지를 좋아합니다.
              <br />
              멋사에서 같은 목표를 향해 함께 달리는 분들에게 에너지를 받고, 그
              에너지를 남들이 필요로 할 때 다시 나눠주는 역할을 하고 싶습니다.
              <br />
              끊임없이 도전하고자 하는 제 포부와 열정을 멋사에서 마음껏 펼치고
              싶습니다!
            </p>
            <p>잘부탁드립니다 ♡</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
