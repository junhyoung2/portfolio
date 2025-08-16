const Clonecoding4 = () => {
    return (
        <div id="clone-coding">
            <div className="content">
                <h2>CLONE CODING</h2>
                <div className="project">
                    <h3 className="project-title">airbnb</h3>
                    <div className="img-container">
                        <img
                            src={
                                process.env.PUBLIC_URL + "/images/airbnbpc.png"
                            }
                            alt="airbnb_pc"
                            className="project-img"
                        />
                    </div>
                    <p className="desc">
                        디바이스 크기에 따라 유동적으로 변하는 헤더 구조와
                        카드형 숙소 레이아웃의 반응형 UI 구현에 중점을
                        두었습니다.
                    </p>
                    <div className="section">
                        <ul>
                            <li>
                                <span>- 제작에 사용된 스킬 : </span> <br />
                                <br />
                                HTML, CSS, SCSS
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <span>- 이 프로젝트에서 배운 점 :</span> <br />
                                <br />
                                HTML과 SCSS만으로도 화면 크기에 따라 유동적으로
                                변하는 구조, 정렬, 시각적 요소를 충분히 구현할
                                수 있다는 자신감을 얻었습니다. 특히 Airbnb처럼
                                반응형 요소가 많은 UI를 직접 구현하면서, 미디어
                                쿼리, Flex/Grid, position 속성 등을 적절히
                                활용해 실제 서비스에 가까운 레이아웃을 만들 수
                                있다는 것을 체감했고, 디자인 재현 능력과 CSS
                                설계에 대한 이해도도 함께 높일 수 있었습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <span> 프로젝트 개요 : </span> <br />
                                <br />
                                <span>UI 디자인 방식 :</span> <br />
                                Figma를 참고하여 Airbnb 메인 페이지의 디자인
                                구조를 분석한 뒤, 이를 기반으로 HTML과 CSS만으로
                                실제 화면을 재현하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />
                                카드형 숙소 리스트는 Flexbox와 Grid를 함께
                                활용하여 구성하였으며, 미디어 쿼리를 통해 화면
                                크기에 따라 레이아웃이 유동적으로 변하는 반응형
                                구조로 설계하였습니다.
                            </li>

                            <li>
                                <span>제작기간 :</span> : 04.30 (1D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 100%(개인프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> GitHub
                            </li>
                           <li className="highlight-link">
                                <a
                                    href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/airbnb"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GITHUB 바로가기 &gt;
                                </a>
                            </li>
                         <li className="highlight-link">
                                <a
                                    href="https://junhyoung2.github.io/airbnb/index.html"
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

export default Clonecoding4;
