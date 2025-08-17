import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Quiz3 = () => {
    const navigate = useNavigate();
    const goToBlog4 = () => {
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
                                Figma 디자인 시안을 바탕으로 HTML과 SCSS만을
                                활용해 정적 웹페이지를 구현였으며, 디자인 구조를
                                해석하고 섹션별로 레이아웃을 나누는 과정에서
                                설계에 대한 이해를 높일 수 있었습니다. <br />
                                다만 반응형 대응을 고려하지 않아 다양한
                                디바이스에서의 완성도는 아쉬움이 남습니다.
                                <br />
                                반응형 대응은 끝내 완료하지 못한 점이 가장
                                아쉬운 부분입니다. <br />
                                미디어 쿼리를 활용해 모바일과 태블릿 화면까지
                                대응하려 했지만, 일정이 빠듯해 데스크탑 기준
                                메인 페이지만 완성하게 되었습니다.
                                <br /> 기획상 서브 페이지도 함께 구현하려
                                했지만, 범위를 조절하지 못해 메인에만 집중하게
                                된 점은 다음 프로젝트에서 개선해야 할
                                부분입니다.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>리팩토링 포인트</span>
                                <br />
                                작업을 진행하면서 색상, 버튼, 폰트 스타일 등
                                반복되는 스타일 코드가 점점 많아지는 문제가
                                있었습니다. <br />
                                처음에는 그대로 작성했지만, 이후 중복이 심해지자
                                SCSS 변수로 정리하면서 코드의 일관성과
                                유지보수성을 확보할 수 있었습니다.
                                <br /> 다만, 초반부터 변수로 체계적으로
                                관리했다면 훨씬 효율적인 작업이 되었을 것이라는
                                아쉬움이 남습니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToBlog4}>
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
