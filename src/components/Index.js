import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Index = () => {
  const indexRef = useRef(null);

  useEffect(() => {
    const indexEl = indexRef.current;

    const handleScroll = () => {
      if (!indexEl) return;
      const rect = indexEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // 화면에 30% 이상 보이면 애니메이션 실행
      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        // h2 애니메이션
        gsap.fromTo(
          indexEl.querySelector("h2"),
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        );
        // 리스트 순차 등장
        gsap.fromTo(
          indexEl.querySelectorAll("li"),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.15,
            delay: 0.3,
            ease: "power2.out"
          }
        );
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 최초 진입 시에도 체크
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="index" ref={indexRef}>
      <h2>INDEX</h2>
      <ul>
        <li>1. ABOUT ME</li>
        <li>2. SKILLS & TOOLS</li>
        <li>3. MY WORKS AND PROJECTS</li>
        <li>4. END</li>
      </ul>
    </div>
  );
};

export default Index;