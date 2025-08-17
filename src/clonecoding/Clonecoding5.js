const Clonecoding5 = () => {
    return (
        <div id="clone-coding">
            <div className="content">
                <h2>CLONE CODING</h2>
                <div className="project">
                    <h3 className="project-title">Momentum</h3>
                    <div className="img-container">
                        <img
                            src={process.env.PUBLIC_URL + "/images/mydaypc.png"}
                            alt="myday_pc"
                            className="project-img"
                        />
                    </div>
                    <p className="desc">
                        실시간 날씨, 시간, ID에 따른 메모 기능 등 개인 맞춤형
                        감성 인터페이스 구현에 중점을 두었습니다.
                    </p>
                    <div className="section">
                        <ul>
                            <li>
                                <span>- 제작에 사용된 스킬 : </span> 
                                <br />
                                React/Router, SCSS, GIT/GitHub, Figma,
                                OpenWeatherMap API 연동
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <span>- 이 프로젝트에서 배운 점 :</span> 
                                <br />
                                React에서 외부 API를 연동한 뒤, 받아온 데이터를
                                상태로 관리하고 그에 따라 UI가 동적으로 변하도록
                                구현하는 과정을 통해 데이터 기반 UI 구성에 대한
                                실전 감각을 키울 수 있었습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <span>프로젝트 개요 </span> 
                                <br />
                                <span>UI 디자인 방식 :</span> <br />
                                Chrome 확장 프로그램인 Momentum을 참고하여
                                전반적인 감성 UI와 구성 요소를 설계하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />
                                Flexbox를 활용해 중앙 정렬 및 세로 방향의
                                레이아웃을 구성하였으며, 화면 크기와 콘텐츠
                                흐름에 따라 간결하고 직관적인 배치가
                                이루어지도록 설계하였습니다.
                            </li>
                            <li>
                                <span>제작기간 :</span> 06.17 ~ 06.19 (3D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 100%(개인프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> GitHub
                            </li>
                       <li className="highlight-link">
                                <a
                                    href="https://github.com/junhyoung2/myday"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GITHUB 바로가기 &gt;
                                </a>
                            </li>
                    <li className="highlight-link">
                                <a
                                    href="https://junhyoung2.github.io/myday/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    SITE URL 바로가기 &gt;
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clonecoding5;
