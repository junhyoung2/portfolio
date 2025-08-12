import { useNavigate } from "react-router-dom"; // useNavigate import 추가
import End from "./End";
import Publishing from "./Publishing";
import Clonecoding1 from "../clonecoding/Clonecoding1";
import Shopping1 from "../shopping/Shopping1";
import Tower1 from "../towerpick/Tower1";
import End1 from "../endtalk/End1";
import Quiz1 from "../Quiz/Quiz1";
import Blog1 from "../blog/Blog1";
import Figma1 from "../figma/Figma1";
import { IoIosArrowDropdown } from "react-icons/io";

const Myproject = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleArrowClick = () => {
    const indexSection = document.getElementById("end");
    if (indexSection) {
      indexSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 각 프로젝트의 이동 경로(path)를 link에 지정
  const projectData = [
    {
      title: "웹프로젝트 1",
      name : "Ririm",
      description: "굿즈 쇼핑몰",
      tech: "FIGMA, REACT/ROUTER, SCSS, GIT/GITHUB",
      link: "/shopping1", // Shopping1 컴포넌트 경로
    },
    {
      title: "웹프로젝트 2",
      name : "TowerPick",
      description: "주차 관리 시스템",
      tech: "Figma / PhotoShop, React, SCSS, Supabase, GIT/GitHub",
      link: "/tower1", // Tower1 컴포넌트 경로
    },
    {
      title: "끝말잇기 게임",
      name : "끝말이",
      description: "익숙한 인터페이스인 끝말잇기 게임",
      tech: "Figma, HTML, CSS, JavaScript, GIT/GitHub",
      link: "/endtalk1", // End1 컴포넌트 경로
    },
    {
      title: "퀴즈게임",
       name : "조사병단 도전과제",
      description: "진격의 거인 세계관 플래시 퀴즈 게임",
      tech: "REACT, SCSS, GIT/GITHUB",
      link: "/quiz1", // Quiz1 컴포넌트 경로
    },
    {
      title: "블로그형 웹페이지",
       name : "Nomad Planet",
      description: "여행 정보 블로그형 웹페이지",
      tech: "REACT, SCSS, GIT/GITHUB",
      link: "/blog1", // Blog1 컴포넌트 경로
    },
    {
      title: "FIGMA 기획안",
      name : "Playmap",
      description: "사용자의 위치 기반 주변 놀이 시설  탐색 모바일 기반 웹앱",
      tech: "FIGMA",
      link: "/figma1", // Figma1 컴포넌트 경로
    },
  ];

  return (
    <div id="myproject">
      <div className="my-projects-container">
        <h2 className="section-title">MY WORKS AND <br/>PROJECTS</h2>
        <div className="project-list">
          {projectData.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.name}</p>
                <p>{project.description}</p>
                <div className="tech-stack">
                  <span>사용 기술:</span> {project.tech}
                </div>
              </div>
              {/* a 태그 대신 div와 onClick 이벤트로 변경 */}
              <div className="project-link" onClick={() => navigate(project.link)}>
                자세히보기 &gt;
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-navigation">
          {/* 하단 링크도 navigate로 이동하도록 변경 */}
          <div className="nav-link" onClick={() => navigate('/clone-coding')}>
            CLONE CODING &gt;
          </div>
          <div className="arrow-container" onClick={handleArrowClick}>
            <IoIosArrowDropdown className="bottom-arrow" />
          </div>
          <div className="nav-link" onClick={() => navigate('/publishing')} >
            PUBLISHING &gt;
          </div>
        </div>
      </div>
      
      <End />
    </div>
  );
};

export default Myproject;