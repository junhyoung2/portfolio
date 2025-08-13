import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsEl = skillsRef.current;

    const handleScroll = () => {
      if (!skillsEl) return;
      const rect = skillsEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        // 제목 애니메이션
        gsap.fromTo(
          skillsEl.querySelector("h2"),
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }
        );
        // 아이콘 stagger + scale + rotate
        gsap.fromTo(
          skillsEl.querySelectorAll(".skill-icon-box"),
          { opacity: 0, scale: 0.7, rotate: -15, y: 30 },
          { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 0.7, stagger: 0.08, delay: 0.2, ease: "back.out(1.7)" }
        );
        // 텍스트 fade-in
        gsap.fromTo(
          skillsEl.querySelectorAll(".skill-text-box"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.4, ease: "power2.out" }
        );
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills" ref={skillsRef}>
      <h2>Skills & Tools</h2>
      <ul className="skills-img">
        <li>
          <div className="skill-icon-box">
            <img src={process.env.PUBLIC_URL + "/images/photoshop.png"} alt="photoshop" />
          </div>
          <div className="skill-text-box">
            <span>PhotoShop</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
<img src={process.env.PUBLIC_URL + "/images/Illestrator.png"} alt="Illestrator" />          </div>
          <div className="skill-text-box">
            <span>Illestrator</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
       <img src={process.env.PUBLIC_URL + "/images/figma.png"} alt="figma" />
          </div>
          <div className="skill-text-box">
            <span>Figma</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
     <img src={process.env.PUBLIC_URL + "/images/html.png"} alt="html" />
          </div>
          <div className="skill-text-box">
            <span>HTML5</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
    <img src={process.env.PUBLIC_URL + "/images/css.png"} alt="css" />
          </div>
          <div className="skill-text-box">
            <span>CSS3</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
          <img src={process.env.PUBLIC_URL + "/images/javascript.png"} alt="javascript" />
          </div>
          <div className="skill-text-box">
            <span>JavaScript ES6</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
         <img src={process.env.PUBLIC_URL + "/images/react.png"} alt="react" />
          </div>
          <div className="skill-text-box">
            <span>React</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
       <img src={process.env.PUBLIC_URL + "/images/git.png"} alt="git" />
          </div>
          <div className="skill-text-box">
            <span>Git</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
           <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="github" />
          </div>
          <div className="skill-text-box">
            <span>GitHub</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
       <img src={process.env.PUBLIC_URL + "/images/scss.png"} alt="scss" />
          </div>
          <div className="skill-text-box">
            <span>SCSS</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
        <img src={process.env.PUBLIC_URL + "/images/jira.png"} alt="jira" />
          </div>
          <div className="skill-text-box">
            <span>Jira</span>
          </div>
        </li>
        <li>
          <div className="skill-icon-box">
<img src={process.env.PUBLIC_URL + "/images/supabase.png"} alt="supabase" />
          </div>
          <div className="skill-text-box">
            <span>SupaBase</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;