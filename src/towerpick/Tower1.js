import { useNavigate } from "react-router-dom";
const Tower1 = () => {
    const navigate = useNavigate();
    const goToTower2 = () => {
        navigate("/tower2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>TowerPick</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/maintower.png"}
                        alt="maintower"
                        className="project-image-tower"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title">
                                    - Description
                                </span>
                                <br />
                                “TOWER PICK”은 사용자가 ‘지금 당장 주차해야 할
                                상황’ 을 고려해, 모바일에 최적화된 형태로
                                개발되었으며, 복잡한 도심 속 주차 문제를
                                해결하기 위해 개발된 ‘도심형 주차타워 전용’ 예약
                                서비스 앱 플랫폼 입니다.
                            </li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <p className="info-title"> - 프로젝트 개요 </p>
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> <br />- Figma를
                                활용해 디자인 시스템을 먼저 구축하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />-
                                Flexbox를 기반으로 한 카드형 레이아웃으로 실제
                                화면을 구현했습니다. Flex를 선택한 이유는 모바일
                                환경에서 요소 정렬과 간격 조절이 용이하고, 각
                                박스 내부의 구성 요소를 직관적으로 관리할 수
                                있기 때문이며, 추후 유지보수 및 수정, 반응형
                                구현을 염두에 두고 설계했습니다.
                            </li>
                            <li>
                                <span>제작에 사용된 스킬 :</span> <br />- Figma
                                / PhotoShop, React, SCSS, Supabase, GIT/GitHub
                            </li>
                            <li>
                                <span>플러그인 :</span> <br />- REACT-ICONS
                                react-router SCSS
                            </li>
                            <li>
                                <span>제작기간 :</span> <br /> - 07.21 ~ 08.01
                                (10D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> <br />- 80%(4인 팀
                                프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span>
                                <br />- GitHub
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div
                                className="nav-link"
                                onClick={goToTower2}
                                style={{ cursor: "pointer" }}
                            >
                                <span>OVERVIEW ＞</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/towerpick-master"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB ＞</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/towerpick-master/"
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

export default Tower1;
