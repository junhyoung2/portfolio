const Clonecoding3 = () => {
    return (
        <div id="clone-coding">
            <div className="content">
                <h2>CLONE CODING</h2>
                <div className="project">
                    <h3 className="project-title">NETFLIX</h3>
                    <div className="img-container">
                        <img
        src={process.env.PUBLIC_URL + "/images/netflixpc.png"}
        alt="netflix_pc"
        className="project-img"
    />
                    </div>
                    <p className="desc">
                        TMDB API를 활용해 받아온 영화 데이터를 슬라이드 형태로
                        구성하고 넷플릭스 스타일의 UI를 구현하는 데
                        집중했습니다.
                    </p>
                    <div className="section">
                        <ul>
                            <li>
                                <span>- 제작에 사용된 스킬 : </span> <br />
                                <br />
                                React/Router, SCSS, GIT/GitHub
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <span>- 이 프로젝트에서 배운 점 :</span> <br />
                                <br />
                                외부 API에서 데이터를 받아와 컴포넌트로 전달하고
                                화면에 출력하는 전체 흐름을 직접 경험하며 데이터
                                연동 방식에 대한 이해를 높였습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <span> 프로젝트 개요 : </span> <br />
                                <br />
                                <span>UI 디자인 방식 :</span> <br />
                                Netflix의 메인 페이지를 분석하여 전체적인 구조와
                                시각적 흐름을 파악한 뒤, 이를 바탕으로
                                레이아웃을 설계하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />
                                Netflix 메인 화면을 기준으로 화면을 Header, Main
                                콘텐츠 영역, Footer로 구분해 레이아웃을
                                구성했습니다. 상단에는 Header를 배치해
                                내비게이션 기능을 담당하게 했고, 메인 콘텐츠
                                영역은 Main, MovieList, DetailBar, WhyJoin, FAQ
                                컴포넌트로 나누어 섹션별 기능과 콘텐츠를
                                독립적으로 관리할 수 있도록 구성했습니다.
                                하단에는 Footer를 고정해 전체 흐름을
                                마무리하도록 했습니다
                            </li>
                            <li>
                                <span>플러그인 :</span> <br /> REACT-ICONS
                                <br />
                                axios
                                <br /> react-router-dom
                                <br /> slick-carousel
                            </li>
                            <li>
                                <span>제작기간 :</span> : 06.23 ~ 06.26 (4D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 100%(개인프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> GitHub
                            </li>
                            <li>
                                <a
                                    href="https://github.com/junhyoung2/netflix"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GITHUB 바로가기 &gt;
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://junhyoung2.github.io/netflix/"
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

export default Clonecoding3;
