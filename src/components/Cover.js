import React, { useEffect, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import gsap from "gsap";

const Cover = () => {
  const coverRef = useRef(null);

  const handleArrowClick = () => {
    const indexSection = document.getElementById("index");
    if (indexSection) {
      indexSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const coverEl = coverRef.current;

    // 배경은 이미 SCSS에서 검정 + 패딩 등 다 잡아놨으니 별도 애니메이션 안 넣음

    // 내용물 아래에서 위로 올라오면서 페이드인 애니메이션
    gsap.fromTo(
      coverEl.querySelector(".cover-content"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section id="cover" ref={coverRef}>
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
