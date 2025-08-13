import { useNavigate } from "react-router-dom";
const Tower1 = () => {
    const navigate = useNavigate();
    const goToQuiz2 = () => {
        navigate("/quiz2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>조사병단 도전과제</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/quiz1.png"}
                        alt="quiz1"
                        className="project-image-end"
                    />

                    <p className="description">
                        진격의 거인 세계관을 활용한 모바일 전용 플래시 카드
                        게임으로, 사용자가 카드를 넘기며 문제와 답을 자연스럽게
                        학습할 수 있도록 개발한 콘텐츠입니다.
                    </p>
                    <div className="info-section">
                        <p className="info-title">제작에 사용된 스킬 :</p>
                        <p>React, SCSS, GIT/GitHub</p>
                    </div>
                    <div className="info-section">
                        <p className="info-title">프로젝트 개요</p>
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> 어두운 테마와
                                진격의 거인 분위기에 맞춘 컬러를 적용하고,
                                카드형 버튼 중심의 화면 구성으로 몰입감 있는
                                플레이를 유도하였습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> 메인 화면에서
                                주제를 선택하고, 문제 풀이와 정답 확인을 거쳐
                                결과 화면으로 이어지는 단계별 퀴즈 레이아웃을
                                구현했습니다.
                            </li>

                            <li>
                                <span>제작기간 :</span> 06.16 ~ 06.17 (2D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 80%(6인 팀 프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> GitHub
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div
                                className="nav-link"
                                onClick={goToQuiz2}
                                style={{ cursor: "pointer" }}
                            >
                                <span>OVERVIEW</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/flash"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/flash/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>SITE URL</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tower1;
