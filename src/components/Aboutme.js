import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Aboutme = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutEl = aboutRef.current;

    const handleScroll = () => {
      if (!aboutEl) return;
      const rect = aboutEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        // 제목 애니메이션
        gsap.fromTo(
          aboutEl.querySelector("h2"),
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }
        );
        // 프로필 이미지 fade-in + rotate
        gsap.fromTo(
          aboutEl.querySelector("img"),
          { opacity: 0, rotate: -20, scale: 0.9 },
          { opacity: 1, rotate: 0, scale: 1, duration: 0.8, delay: 0.2, ease: "back.out(1.7)" }
        );
        // info 리스트 stagger 등장
        gsap.fromTo(
          aboutEl.querySelectorAll(".info li"),
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, delay: 0.4, ease: "power2.out" }
        );
        // 설명문구 fade-in
        gsap.fromTo(
          aboutEl.querySelector(".description"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.7, ease: "power2.out" }
        );
        // 깃허브 링크 bounce-in
        gsap.fromTo(
          aboutEl.querySelector(".git-container"),
          { opacity: 0, y: 40, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 1, ease: "bounce.out" }
        );
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="aboutme" ref={aboutRef}>
      <h2>ABOUT ME</h2>
      <div className="content">
        <img src="/images/myprofile.png" alt="profile" />
        <ul className="info">
          <li>
            <IoPerson />
            <span>박준형</span>
          </li>
          <li>
            <IoCall />
            <span>010-3038-8346</span>
          </li>
          <li>
            <MdOutlineEmail />
            <span>qkek8345@naver.com</span>
          </li>
        </ul>
      </div>

      <p className="description">
        성실함과 긍적적인 마인드를 바탕으로, 협업과 소통을 가장 중요하게 생각합니다.<br />
        QA 업무를 하며 다양한 직군과 함께 일하다 보니 프론트엔드 직군에 자연스럽게 관심이 생겼습니다.<br />
        새로운 지식과 기술을 배우는 과정에서 성장의 즐거움을 느끼고 있습니다.<br />
        앞으로도 끊임없이 배우고, 도전을 두려워하지 않는 개발자가 되고자 합니다.
      </p>

      <div className="git-container">
         <a href="https://github.com/junhyoung2" target="_blank" rel="noopener noreferrer">
        <FaGithub className="git" />
        <p>사이트 이동</p>
        </a>
      </div>
    </section>
  );
};

export default Aboutme;