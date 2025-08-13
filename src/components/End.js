import { FaGithub } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const End = () => {
  const endRef = useRef(null);

  useEffect(() => {
    const endEl = endRef.current;

    const handleScroll = () => {
      if (!endEl) return;
      const rect = endEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        // h2 순차 등장
        gsap.fromTo(
          endEl.querySelectorAll("h2"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }
        );
        // 깃허브 링크 bounce-in
        gsap.fromTo(
          endEl.querySelector(".git-container"),
          { opacity: 0, y: 40, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.7, ease: "bounce.out" }
        );
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="end" ref={endRef}>
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