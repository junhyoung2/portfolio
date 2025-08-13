
import { useNavigate } from "react-router-dom";
const Blog1 = () => {
    const navigate = useNavigate();
    const goToBlog2= () => {
        navigate("/blog2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>Nomad Planet</h2>
                    <img
                        src="/images/blog1.png"
                        alt="blog1"
                        className="project-image-end"
                    />
                    <p className="description">
여행에 진입 장벽을 느끼는 사용자들을 위해 기획된 블로그형 웹사이트로,테마별 여행지 선택, AI 기반 추천 일정, 여행지 정보 등을 제공하여 여행이 익숙하지 않은 사람들도 쉽게 접근할 수 있도록 설계된 서비스입니다.                    </p>
                    <div className="info-section">
                        <p className="info-title">제작에 사용된 스킬 :</p>
                        <p>Figma, HTML5/CSS3</p>
                    </div>
                    <div className="info-section">
                        <p className="info-title">프로젝트 개요</p>
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> DCOD Lab 웹사이트의 레이아웃 스타일을 참고하여 Figma에서 전체 UI 흐름과 비주얼 구조를 먼저 설계한 후, 이를 바탕으로 실제 화면을 구현하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> Flexbox를 중심으로 헤더와 메뉴를 구성하고, 섹션별 콘텐츠 정렬에도 유연하게 적용하였습니다. <br/>
                                본문 영역은 Flex와 Grid를 혼합하여 구성함으로써 콘텐츠 유형에 따라 적절하게 배치하였고, SCSS 변수와 스타일 관리 구조를 도입해 전체적으로 일관된 비주얼을 유지할 수 있도록 하였습니다.
                            </li>
                        
                            <li>
                                <span>제작기간 :</span>  05.01~05.02 (2D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 100% (개인프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> GitHub
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div
                                className="nav-link"
                                onClick={goToBlog2}
                                style={{ cursor: "pointer" }}
                            >
                                <span>OVERVIEW</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/project_nomad_planet_v3"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/project_nomad_planet_v3/index.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>SITE URL</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog1;
