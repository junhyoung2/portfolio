import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Myproject = () => {
    const navigate = useNavigate();
    const myProjectRef = useRef(null);

    const handleArrowClick = () => {
        const indexSection = document.getElementById("end");
        if (indexSection) {
            indexSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const myProjectEl = myProjectRef.current;

        const handleScroll = () => {
            if (!myProjectEl) return;
            const rect = myProjectEl.getBoundingClientRect();
            const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

            if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
                // 섹션 타이틀 애니메이션
                gsap.fromTo(
                    myProjectEl.querySelector(".section-title"),
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        ease: "power3.out",
                    }
                );
                // 프로젝트 리스트 순차 등장
                gsap.fromTo(
                    myProjectEl.querySelectorAll(".project-item"),
                    { opacity: 0, x: 40, scale: 0.98 },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.12,
                        delay: 0.2,
                        ease: "power2.out",
                    }
                );
                // 네비게이션 버튼 bounce-in
                gsap.fromTo(
                    myProjectEl.querySelectorAll(".nav-link"),
                    { opacity: 0, y: 40, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        delay: 0.7,
                        ease: "bounce.out",
                    }
                );
                // 아래 화살표 fade-in
                gsap.fromTo(
                    myProjectEl.querySelector(".arrow-container"),
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: 1,
                        ease: "power2.out",
                    }
                );
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const projectData = [
        {
            title: "웹프로젝트 1",
            name: "Ririm",
            description: "굿즈 쇼핑몰",
            tech: "FIGMA, REACT/ROUTER, SCSS, GIT/GITHUB",
            link: "/shopping1",
        },
        {
            title: "웹프로젝트 2",
            name: "TowerPick",
            description: "주차 관리 시스템",
            tech: "Figma / PhotoShop, React, SCSS, Supabase, GIT/GitHub",
            link: "/tower1",
        },
        {
            title: "끝말잇기 게임",
            name: "끝말이",
            description: "익숙한 인터페이스인 끝말잇기 게임",
            tech: "Figma, HTML, CSS, JavaScript, GIT/GitHub",
            link: "/endtalk1",
        },
        {
            title: "퀴즈게임",
            name: "조사병단 도전과제",
            description: "진격의 거인 세계관 플래시 퀴즈 게임",
            tech: "REACT, SCSS, GIT/GITHUB",
            link: "/quiz1",
        },
        {
            title: "블로그형 웹페이지",
            name: "Nomad Planet",
            description: "여행 정보 블로그형 웹페이지",
            tech: "REACT, SCSS, GIT/GITHUB",
            link: "/blog1",
        },
        {
            title: "FIGMA 기획안",
            name: "Playmap",
            description:
                "사용자의 위치 기반 주변 놀이 시설  탐색 모바일 기반 웹앱",
            tech: "FIGMA",
            link: "/figma1",
        },
         {
            title: "박준형 Sub 포트폴리오",
            name: "Sub portfolio",
            description: "Paperlogy st 포트폴리오",
            tech: "HTML, CSS, JavaScript,",
            link: "/paperlogy1",
        }
    ];

    return (
        <div id="myproject" ref={myProjectRef}>
            <div className="my-projects-container">
                <h2 className="section-title">
                    MY WORKS AND <br />
                    PROJECTS
                </h2>
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
                            <div
                                className="project-link"
                                onClick={() => navigate(project.link)}
                            >
                                자세히보기 &gt;
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bottom-navigation">
                    <button
                        className="nav-link"
                        onClick={() => navigate("/clone-coding")}
                    >
                        CLONE CODING &gt;
                    </button>

                    <button
                        className="nav-link"
                        onClick={() => navigate("/publishing")}
                    >
                        WEB PUBLISHING &gt;
                    </button>
                </div>
                <div className="arrow-container-2" onClick={handleArrowClick}>
                    <IoIosArrowDropdown className="bottom-arrow-2" />
                </div>
            </div>
        </div>
    );
};

export default Myproject;
