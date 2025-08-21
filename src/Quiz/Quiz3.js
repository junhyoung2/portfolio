import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Quiz3 = () => {
    const navigate = useNavigate();
    const goToQuiz4 = () => {
        navigate("/#cover");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>회고</h2>
                    <div className="info-section">
                        <ul>
                            <li>
                                <span> 어려웠던 점 및 해결방법 : </span>
                                <br /> <br />- 플래시카드 방식으로 사용자가
                                스스로 답을 떠올려야 하고 카테고리 구성이
                                복잡했던 점은, 카테고리를 세분화하고 직관적인
                                버튼 배치로 흐름을 끊기지 않게 구현하여
                                해결했습니다. - 진격의 거인 세계관의 메인 컬러를
                                선정하기 어려워 전체 디자인 작업에 제약이
                                있었지만, 작품 내 무지성 거인의 피부색과 배경
                                톤을 참고하여 카드 배경, 버튼, 텍스트 색상에
                                다크톤 UI를 적용하고, 대비와 그림자 효과를
                                적절히 조합함으로써 사용자에게 몰입감 있는
                                시각적 경험을 제공하도록 스타일링을
                                구현했습니다.
                            </li>
                            <br />
                            <li>
                                <span>
                                    아쉬운 점 및 개선 방향 : <br /> <br />
                                </span>
                                <strong>
                                    - 메인페이지 내 사용자 피드백 미구현
                                </strong>
                                <br />
                                아쉬운 점 : 카드 선택과 학습 진행 과정에서
                                사용자 인터랙션에 대한 피드백이 부족하여
                                직관적이지 못했습니다. 개선 방향 : 카드 선택,
                                답변 보기/학습 종료, 다음 카드 이동 시 시각적
                                피드백과 애니메이션을 적용하여 사용자 경험을
                                향상시키겠습니다.
                                <br />
                                <br />
                                <strong>
                                    - 답변 보기/닫기 시 시각적 피드백 부족
                                </strong>
                                <br />
                                아쉬운 점 : 답변보기 버튼 선택 시 변화가
                                명확하지 않아 사용자가 상태를 인지하기
                                어려웠습니다. 개선 방향 : 답변 표시와 숨김 시
                                애니메이션 효과를 적용하고, 색상과 강조를 통해
                                시각적으로 상태 변화를 직관적으로
                                구현하겠습니다.
                                <br />
                                <br />
                                <strong>- 학습 기록 연동 미구현</strong>
                                <br />
                                아쉬운 점 : 학습 완료 여부나 진행 상태를
                                기록하지 않아 재방문 시 이어서 학습할 수
                                없었습니다. <br/>개선 방향 : JSON 구조를 확장하고
                                학습 완료/진행 상태를 연동하여 재학습과 진행
                                기록 확인 기능을 구현하겠습니다.
                            </li>
                            <br />
                            <br />
                            <li>
                                <span>리팩토링 포인트 : </span>
                                <br /> <br />- 초기에는 단순히 질문만 나열된
                                리스트였지만, 학습 흐름을 고려해 한 장씩 넘기는
                                구조로 개편하였으며, 카테고리 선택 → 퀴즈 리스트
                                확인 → 정답 확인 → 종료까지 전체 흐름을 컴포넌트
                                단위로 명확히 분리하였습니다. -향후 점수
                                시스템이나 주관식 답안 입력 등 추가 기능을
                                고려할 수 있도록 레이아웃을 구조화 하였습니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToQuiz4}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Quiz3;
