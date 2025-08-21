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
                    <h2>Play Map</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/figma1.png"}
                        alt="figma1"
                        className="project-image-end"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title">
                                    - Description
                                </span>
                                <br /> Figma , Playmap은 사용자의 위치를
                                기반으로 주변 놀이 시설 정보를 탐색할 수 있도록
                                구성된 서비스로, 본 프로젝트는 그 초기 디자인과
                                UI/UX 설계에 집중하였습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <p className="info-title">- 프로젝트 개요</p>
                        <br />
                        <ul>
                            <li>
                                <span>제작에 사용된 스킬 :</span> <br />- Figma
                            </li>
                            <li>
                                <span>UI 디자인 방식 :</span> <br />- Figma를
                                활용해 클릭 가능한 프로토타입을 직접
                                제작하였으며, 버튼 흐름과 화면 전환 등 사용자의
                                실제 인터랙션을 고려한 설계를 주도적으로
                                진행하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />-
                                컴포넌트 기반으로 구성하였고, 버튼, 카드,
                                네비게이션 메뉴 등 반복적으로 사용되는 요소들을
                                추후 구현 시 재사용성과 유지보수성을 높일 수
                                있도록 구조적인 일관성을 유지했습니다.
                            </li>

                            <li>
                                <span>제작기간 :</span>
                                <br /> - 04.07~04.09 (3D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> <br />- 100% (개인
                                프로젝트)
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div className="nav-link" onClick={goToFigma2}>
                                <span>OVERVIEW ＞</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://www.figma.com/design/Jc7gABxb682h0KyvOAfDb5/UI-UX-%EB%94%94%EC%9E%90%EC%9D%B8---Playmap?node-id=2-3334&p=f&t=Fd0fpDRtPYl90Ab9-0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Figma ＞</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Figma1;
