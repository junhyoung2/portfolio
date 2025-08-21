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
                                <span>어려웠던 점 및 해결방법 : </span>
                                <br />
                                - Figma 디자인 시안을 기반으로 HTML과 SCSS만으로
                                정적 웹페이지를 구현하면서, 디자인 구조를 정확히
                                해석하고 섹션별 레이아웃으로 나누는 과정이
                                어려웠습니다. <br />
                                이를 해결하기 위해, 각 섹션을 Flexbox로 정렬하고
                                간격을 조정하며, 레이아웃 구조를 먼저 설계한 뒤
                                하나씩 구현해 나가는 방식으로 문제를
                                해결했습니다.
                                <br />
                                <br />
                            </li>
                            <li>
                                <span>
                                    아쉬운 점 및 개선 방향 : <br /> <br />
                                </span>
                                <strong> - 서브 페이지 미구현 </strong>
                                <br />
                                아쉬운 점 : 메인 페이지만 구현한 후, 서브 페이지
                                구현을 고려하지 못해 전체 사이트 흐름과 콘텐츠
                                확장을 충분히 반영하지 못했습니다. <br />
                                개선 방향 : 다음 프로젝트에서는 페이지별
                                우선순위와 모듈화를 명확히 정의하고, 메인과 서브
                                페이지를 병행 개발할 수 있도록 계획을
                                수립하겠습니다.
                            </li>
                            <br />

                            <li>
                                <span>리팩토링 포인트</span>
                                <br />
                                <br />
                                - 작업을 진행하면서 색상, 버튼, 폰트 스타일 등
                                반복되는 스타일 코드가 점점 많아지는 문제가
                                있었습니다. <br />
                                공통 클래스를 정의하여 버튼, 카드와 같은
                                요소들의 스타일을 재사용 가능하게 정리했습니다.
                                <br /> 다만, 초반부터 체계적으로 관리했다면 훨씬
                                효율적인 작업이 되었을 것이라는 아쉬움이
                                남습니다.
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
