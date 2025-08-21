import { useNavigate } from "react-router-dom";
const End1 = () => {
    const navigate = useNavigate();
    const goToEnd2 = () => {
        navigate("/endtalk2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>endtalk</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/endtalk1.png"}
                        alt="endword1"
                        className="project-image-end"
                    />
                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title">Description</span>
                                <br />
                                끝말잇기 형식의 단어 게임 웹앱으로, 단어 입력 및
                                게임 흐름을 구성한 개인 프로젝트입니다. 우리말샘
                                OpenAPI를 연동해 실제 존재하는 단어만 사용
                                가능하도록 구현하여 게임의 완성도와 정확성을
                                높였습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <span className="info-title">프로젝트 개요</span> <br />
                        <br />
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> <br /> -
                                카카오톡의 말풍선 ui를 참고하여 채팅 형태로
                                구현하였습니다. 익숙한 인터페이스를 적용하여
                                사용자는 별도의 학습 없이도 직관적으로 게임을
                                진행할 수 있으며, 이를 통해 진입 장벽을 낮추고
                                누구나 쉽게 참여할 수 있는 UX를 완성하였습니다.
                            </li>
                            <br />
                            <li>
                                <span>제작에 사용된 스킬 :</span> <br />- Figma,
                                SCSS, React, GIT/GitHub
                            </li>
                            <br />
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />
                                - 레이아웃은 두개의 주요 화면으로 제작
                                하였습니다. 시작화면과 게임 진행 화면 두개의
                                화면으로 구성하여 단어 입력 및 말풍선 형태의
                                단어 목록 등 게임 진행에 필요한 기능을
                                포함합니다. <br />
                                - 전체 UI는 모바일 환경에 우선 순위를 두어
                                제작하였으며, Flexbox를 활용하여 입력창과 단어
                                UI 등의 정렬을 간결하게 구현했습니다.
                                <br />- Flexbox를 사용함으로써 요소 간 간격과
                                정렬을 직관적으로 관리할 수 있고, 화면 크기
                                변화에 따라 유연하게 배치가 가능하여 모바일
                                반응형 환경에서 유지보수와 수정도 용이합니다.
                            </li>
                            <br />
                            <li>
                                <span>제작기간 :</span> <br />- 05.22~05.23 (2D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> <br />- 100% (개인
                                프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span>
                                <br /> - GitHub
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div className="nav-link" onClick={goToEnd2}>
                                <span>OVERVIEW ＞</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/endword"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB ＞</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/endword/"
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

export default End1;
