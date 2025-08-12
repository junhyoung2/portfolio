import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Cover = () => {
  const handleArrowClick = () => {
    const indexSection = document.getElementById("index");
    if (indexSection) {
      indexSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cover">
      <div className="cover-content">
        <h2>안녕하세요,</h2>
        <h2 className="highlight">프론트엔드 개발자</h2>
        <h2>박준형입니다.</h2>
        <p>
          협업과 성장에 진심인 저는, 사용자에게 먼저 다가가는 웹사이트의{" "}
          <span className="highlight">프론트엔드</span>를 담당합니다.
          <br />
          제 웹 포트폴리오를 방문해 주셔서 감사합니다.
        </p>
      </div>
      <div className="arrow-container" onClick={handleArrowClick} style={{ cursor: "pointer" }}>
        <IoIosArrowDropdown className="bottom-arrow" />
      </div>
    </section>
  );
};

export default Cover;
