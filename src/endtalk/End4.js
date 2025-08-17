import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const End4 = () => {
    const navigate = useNavigate();
    const goTOEnd5 = () => {
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
                                <span>어려웠던 점 및 해결방법</span>
                                <br />
                             메시지가 왼쪽/오른쪽으로 번갈아 출력되는 말풍선 UI 구현이 쉽지 않았습니다. SCSS의 nth-child와 Mixin을 활용해 방향 정렬과 스타일 반복 문제를 해결하였습니다.
                             <br/>
                              카카오톡처럼 익숙한 UI를 참고해 사용자 흐름을 빠르게 설계했지만, 메시지 정렬과 말풍선 스타일 구현 과정에서 세밀한 조정이 예상보다 복잡하게 느껴졌습니다. 이를 해결하기 위해 SCSS 변수와 Mixin을 적극적으로 활용하여 코드의 유지보수성과 재사용성을 높였고, 반복되는 스타일도 효과적으로 정리할 수 있었습니다. <br/>이 과정을 통해 UI 설계의 초기 단계에서부터 반응형 구조와 재사용성을 함께 고려하는 것이 얼마나 중요한지 깨달을 수 있었습니다.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>리팩토링 포인트</span>
                                <br />
                            SCSS Mixin과 변수로 반복되는 스타일을 통일해 유지보수성을 높였습니다. <br/>추후에는 단어 중복 체크, 제한 시간 기능, 그리고 사전 API 연동을 통해 게임 신뢰도를 향상시키는 방향으로 구조를 개선할 예정입니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goTOEnd5}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default End4;
