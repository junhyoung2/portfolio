import { FaGithub } from "react-icons/fa";

const End = () => {
  return (
    <section id="end">
      <div className="end-text">
        <h2>감사합니다.</h2>
        <h2>지금까지</h2>
        <h2 className="highlight">프론트엔드 개발자</h2>
        <h2 className="myname">박준형이었습니다.</h2>
      </div>
      <div className="git-container">
        <a href="https://github.com/junhyoung2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="git" />
          <p>사이트 이동</p>
        </a>
      </div>
    </section>
  );
};

export default End;
