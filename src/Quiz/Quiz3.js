import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Quiz3 = () => {
    const navigate = useNavigate();
    const goToQuiz4 = () => {
 navigate("/#myproject");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>회고</h2>
                    <div className="info-section">
                        <ul>
                            <li>
                                <span>어려웠던 점 및 해결방법</span>
                                <br />
                             OX나 선택지가 있는 퀴즈가 아닌, 사용자가 스스로 답을 떠올리고 정답을 확인하는 플래시카드 방식이라 구성 자체가 직관적이지 않았습니다. <br/> 진격의 거인이라는 방대한 세계관을 주제별로 잘게 나누는 과정에서 카테고리 구성에 가장 많은 고민을 했습니다. <br/>카드를 넘기는 흐름이 끊기지 않도록 버튼 구조와 화면 이동 타이밍을 세심하게 조절하였습니다. <br/>시각적으로 몰입감을 주기 위해 폰트, 컬러 톤, 배치 등 다크톤 UI 중심으로 구성하였습니다.<br/>
                             진격의 거인이라는 강한 세계관에 비해 스타일링 측면에서 분위기를 충분히 반영하지 못한 점은 아쉬움으로 남았고, <br/>향후에는 시각적 몰입감을 높일 수 있는 테마 적용과 감정 표현 요소도 함께 고려해야겠다는 점을 느꼈습니다. <br/>또한, 반응형 대응이 부족했고 데스크탑 호환성도 완벽하지 않아, 다양한 디바이스 환경을 고려한 개발 역시 다음 과제로 남겨두게 되었습니다.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>리팩토링 포인트</span>
                                <br />
                           초기에는 단순히 질문만 나열된 리스트였지만, 학습 흐름을 고려해 한 장씩 넘기는 구조로 개편하였습니다. <br/>버튼의 의미와 기능을 명확히 나눠 사용자가 자연스럽게 다음 질문으로 넘어갈 수 있도록 UX를 정비하였습니다. <br/>카테고리 선택 → 문제 확인 → 정답 확인 → 종료까지 전체 흐름을 컴포넌트 단위로 명확히 분리하였습니다.<br/> 향후 점수 시스템이나 주관식 답안 입력 등 추가 기능을 고려할 수 있도록 레이아웃을 구조화 하였습니다.
                           플래시카드 형식이라는 단순한 구조를 바탕으로 콘텐츠 전달에 집중한 프로젝트였습니다.<br/> 모바일 화면을 기준으로 전체 UI를 설계하면서, 레이아웃의 균형과 카드 넘김 흐름을 간결하게 유지하는 데 집중할 수 있었습니다.<br/> 카테고리 → 카드 → 결과 화면까지의 흐름을 React 컴포넌트 단위로 나누어 구조적으로 정리했고, SCSS를 활용해 스타일을 통일하며 유지보수성도 함께 고려했습니다.
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
