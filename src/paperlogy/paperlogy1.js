import { useNavigate } from "react-router-dom";
const Paperlogy1 = () => {
    const navigate = useNavigate();
    const goToPaperlogy2 = () => {
        navigate("/paperlogy2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>Sub portfolio</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/paperlogy1.png"}
                        alt="paperlogy1"
                        className="project-image"
                    />
                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title">
                                    - Description
                                </span>
                                <br /> Paperlogy의 역동적인 디자인에서 영감을
                                받아 제작한 서브 포트폴리오입니다. 기존 프로젝트
                                경험을 한눈에 확인할 수 있도록 구성했습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title">
                                    {" "}
                                    - 프로젝트 개요
                                </span>{" "}
                                <br /> <br />
                                <span>UI 디자인 방식 :</span> <br /> -
                                Paperlogy의 애니메이션을 레퍼런스로 삼아
                                원페이지 기반의 직관적인 레이아웃을
                                구성했습니다. 반응형 구조와 인터랙션
                                애니메이션을 적용해 시각적 몰입감을
                                강화했습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />-
                                Flexbox를 주축으로 전체 레이아웃을 구성했으며,
                                프로젝트와 같은 주요 콘텐츠는 카드 형태로
                                정리하여 일관성과 가독성을 높였습니다.
                                데스크톱에서는 여러 열로 아이템을 배치하고,
                                미디어 쿼리를 통해 모바일에서는 
                                한 열로 손쉽게 전환하는
                                반응형 배치를 구현했습니다. 또한, gap과
                                justify-content 등의 속성을 활용하여 요소 간
                                간격과 정렬을 직관적으로 관리함으로써 유지보수와
                                수정을 염두에 두고 설계했습니다.
                            </li>
                            <li>
                                <span>제작에 사용된 스킬 :</span> <br />- HTML,
                                css, JavaScript
                            </li>
                            <li>
                                <span>플러그인 :</span> <br />- gsap
                            </li>

                            <li>
                                <span>제작기간 :</span> <br /> - 06.04~06.09
                                (4D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> <br />- 100%(개인
                                프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> <br />- GitHub
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div className="nav-link" onClick={goToPaperlogy2}>
                                <span>OVERVIEW ＞</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/paperlogy_portfolio"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB ＞</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/paperlogy_portfolio/#about"
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

export default Paperlogy1;
