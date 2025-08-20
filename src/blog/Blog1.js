import { useNavigate } from "react-router-dom";
const Blog1 = () => {
    const navigate = useNavigate();
    const goToBlog2 = () => {
        navigate("/blog2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>Nomad Planet</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/blog1.png"}
                        alt="blog1"
                        className="project-image-end"
                    />

                  
                    <div className="info-section">
                        
                        <ul>
                            <li>
                                <span className="info-title">- Description</span> <br/>
                                 여행에 진입 장벽을 느끼는 사용자들을 위해 기획된
                        블로그형 웹사이트로,테마별 여행지 선택, AI 기반 추천
                        일정, 여행지 요약 정보 등을 제공하여 여행이 익숙하지
                        않은 사람들도 쉽게 접근할 수 있도록 설계된 서비스입니다.
                            </li>
                        </ul>
                       
                    </div>
                    <div className="info-section">
                        <span className="info-title">- 프로젝트 개요</span> <br /><br />
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> <br />
                                - DCOD Lab 웹사이트의 레이아웃 스타일을 참고하여
                                Figma에서 전체 UI 흐름과 비주얼 구조를 먼저
                                설계한 후, 이를 바탕으로 실제 화면을
                                구현하였습니다.
                            </li>
                            <li>
                                 <span>제작에 사용된 스킬 :</span><br/>
                                -  Figma, HTML5/CSS3
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />
                                - Flexbox 기반으로 카드형 레이아웃을 구성했으며,
                                각 카드 간 균등한 간격과 중앙 정렬을 쉽게 구현할
                                수 있고, 화면 크기에 따라 요소들이 유연하게
                                배치되어 반응형 디자인 적용이 용이하기 때문에
                                Flexbox를 채택했습니다. <br/>또한, 카드 단위로 콘텐츠를
                                구분함으로써 시각적 일관성을 높이고, 사용자에게
                                정보 구조를 명확하게 전달할 수 있는 장점이 있어
                                카드 기반 레이아웃을 선택했습니다.
                            </li>

                            <li>
                                <span>제작기간 :</span> <br /> - 05.01~05.02 (2D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> <br />
                                - 100% (개인프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> <br />
                                - GitHub
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
                                <span>OVERVIEW ＞</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/project_nomad_planet_v3"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB ＞</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/project_nomad_planet_v3/index.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>SITE URL ＞</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog1;
