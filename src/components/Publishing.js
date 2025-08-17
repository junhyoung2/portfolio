const Publishing = () => {
    return (
        <div id="publishing">
            <h2>PUBLISHING</h2>

            <div className="form">
                <h2>YES24 상세 페이지</h2>
                <img
                    src={process.env.PUBLIC_URL + "/images/yes24.png"}
                    alt="yes24"
                />
                <p>제작에 사용된 스킬 :</p>
                <ul>
                    <li>HTML, CSS</li>
                </ul>
                <p>
                    핵심 기능 : <br />
                    온라인 서점 사이트처럼 책 사진 클릭 시 ROTATE 되어 책 측/뒷면 표현
                </p>
                <p>
                    배포방식 : GITHUB
                    <br /><br />
                    <a
                        href="https://github.com/junhyoung2/bookstore"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GITHUB 바로가기 &gt;
                    </a>
                    <br />
                    <a
                        href="https://junhyoung2.github.io/bookstore/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SITE URL 바로가기 &gt;
                    </a>
                </p>
            </div>

            <div className="form">
                <h2>Gallery</h2>
                <img
                    src={process.env.PUBLIC_URL + "/images/gallery.png"}
                    alt="gallery"
                />
                <p>제작에 사용된 스킬 :</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                </ul>
                <p>
                    핵심 기능 : <br />
                    체크박스/라디오 버튼으로 3D 회전 메뉴 및 그리드 화면 전환
                </p>
                <p>
                    배포방식 : GITHUB
                    <br /><br />
                    <a
                        href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/galley"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GITHUB 바로가기 &gt;
                    </a>
                    <br />
                    <a
                        href="https://junhyoung2.github.io/galley/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SITE URL 바로가기 &gt;
                    </a>
                </p>
            </div>

            <div className="form">
                <h2>이미지 캐러셀</h2>
                <img
                    src={process.env.PUBLIC_URL + "/images/carousel.png"}
                    alt="carousel"
                />
                <p>제작에 사용된 스킬 :</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                </ul>
                <p>
                    핵심 기능 :<br />
                    양방향 무한 루프 이동 가능, 하단 dot 클릭 시 해당 인덱스로 이동
                </p>
                <p>
                    배포방식 : GITHUB
                    <br /><br />
                    <a
                        href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/javascript/img_carousel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GITHUB 바로가기 &gt;
                    </a>
                    <br />
                    <a
                        href="https://junhyoung2.github.io/javascript/img_carousel/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SITE URL 바로가기 &gt;
                    </a>
                </p>
            </div>

            <div className="form">
                <h2>Grid</h2>
                <img
                    src={process.env.PUBLIC_URL + "/images/grid.png"}
                    alt="grid"
                />
                <p>제작에 사용된 스킬 :</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                </ul>
                <p>
                    핵심 기능 :<br />
                    쇼핑몰 컨셉, 홀수/짝수/전체 규칙에 따라 데이터를 보여주기 위한 기능
                </p>
                <p>
                    배포방식 : GITHUB
                    <br /><br />
                    <a
                        href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/javascript/0521"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GITHUB 바로가기 &gt;
                    </a>
                    <br />
                    <a
                        href="https://junhyoung2.github.io/javascript/0521/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SITE URL 바로가기 &gt;
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Publishing;
