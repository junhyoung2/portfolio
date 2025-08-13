const Clonecoding2 = () => {
  return (
    <div id="clone-coding">
      <div className="content">
        <h2>CLONE CODING</h2>
        <div className="project">
          <h3 className="project-title">TESLA</h3>
          <div className="img-container">
            <img
              src={process.env.PUBLIC_URL + "/images/teslapc.png"}
              alt="tesla_pc"
              className="project-img"
            />
          </div>
          <p className="desc">
            미디어 쿼리로 디바이스 크기에 따라 배경 이미지, 내비게이션, 비디오
            비율을 유동적으로 조정했습니다.
          </p>
          <div className="section">
            <ul>
              <li>
                <span>- 제작에 사용된 스킬 : </span> <br /><br />
                HTML, CSS
              </li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <li>
                <span>- 이 프로젝트에서 배운 점 :</span> <br /><br />
                미디어 쿼리를 활용해 디바이스 크기에 따라 배경 이미지, 네비게이션,
                비디오 비율을 유동적으로 변경되도록 구현했습니다.
              </li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <li>
                <span> 프로젝트 개요 : </span> <br /><br />
                <span>UI 디자인 방식 :</span> <br />
                Figma를 통해 Tesla 공식 홈페이지의 레이아웃 구조를 분석한 뒤,
                HTML과 CSS를 활용해 실제 스타일을 재현하는 방식으로
                구현하였습니다.
              </li>
              <li>
                <span>레이아웃 제작 방식 :</span> <br />
                Mobile First 원칙에 따라 모바일 화면을 기준으로 레이아웃을
                설계하고, 미디어 쿼리를 활용해 데스크탑 해상도에서도 콘텐츠가
                자연스럽게 재배치 되도록 구성하였습니다.
              </li>
              <li>
                <span>제작기간 :</span> 04.17 ~ 04.18 (2D)
              </li>
              <li>
                <span>제작 참여율 :</span> 100%(개인프로젝트)
              </li>
              <li>
                <span>배포방식 :</span> GitHub
              </li>
              <li>
                <a
                  href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/tesla"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB 바로가기 &gt;
                </a>
              </li>
              <li>
                <a
                  href="https://junhyoung2.github.io/tesla/index.html"
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

export default Clonecoding2;
