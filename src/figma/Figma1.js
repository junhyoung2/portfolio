import { useNavigate } from "react-router-dom";
const Figma1 = () => {
    const navigate = useNavigate();
    const goToFigma2 = () => {
        navigate("/figma2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>EndTalk</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/figma1.png"}
                        alt="figma1"
                        className="project-image-end"
                    />

                    <p className="description">
                        Playmap은 사용자의 위치를 기반으로 주변 놀이 시설 정보를
                        탐색할 수 있도록 구성된 서비스로, 본 프로젝트는 그 초기
                        디자인과 UI/UX 설계에 집중하였습니다.
                    </p>
                    <div className="info-section">
                        <p className="info-title">제작에 사용된 스킬 :</p>
                        <p>Figma</p>
                    </div>
                    <div className="info-section">
                        <p className="info-title">프로젝트 개요</p>
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> Figma를 활용해
                                클릭 가능한 프로토타입을 직접 제작하였으며, 버튼
                                흐름과 화면 전환 등 사용자의 실제 인터랙션을
                                고려한 설계를 주도적으로 진행하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> 레이아웃은
                                디자인 시스템을 기반으로 구성하였고, 버튼, 카드,
                                네비게이션 메뉴 등 반복적으로 사용되는 요소들을
                                컴포넌트화하여 구조적인 일관성을 유지했습니다.
                            </li>

                            <li>
                                <span>제작기간 :</span> 04.07~04.09 (3D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 100% (개인 프로젝트)
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div
                                className="nav-link"
                                onClick={goToFigma2}
                                style={{ cursor: "pointer" }}
                            >
                                <span>OVERVIEW</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://www.figma.com/design/TVud9Zwaw5TL3xzMkQO81z/%EB%B8%94%EB%A1%9C%EA%B7%B8%ED%98%95-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0-1&p=f&t=aQsOWKaREB4rsqUL-0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Figma</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Figma1;
