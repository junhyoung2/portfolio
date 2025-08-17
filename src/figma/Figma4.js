import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Figma4 = () => {
    const navigate = useNavigate();
    const goFigma5 = () => {
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
                            화면 구성을 반복적으로 수정하며 플로우 정리와 페이지 간 연결 구조를 명확히 잡는 데 시간이 걸렸습니다.  <br />
지역 선택, 필터, 거리순 정렬 버튼을 동시에 배치하면서도 사용자의 시선 흐름과 조작 편의성을 해치지 않는 구조를 설계하는 데 어려움이 있었습니다.<br />
서비스 구조를 기획하면서 콘텐츠의 범위와 카테고리를 정리하는 데 가장 많은 시간이 소요되었습니다.<br /> 초기에는 기능이 너무 많아져 사용자 흐름이 복잡해졌고, 이를 해결하기 위해 핵심 기능 중심으로 구조를 단순화하는 과정이 필요했습니다.<br />
               또한 디자인 작업 초반에는 컴포넌트 활용이 부족해 반복 작업이 많았지만, 후반부에는 Figma의 디자인 시스템을 적용하면서 재사용성과 작업 효율이 크게 향 상되었습니다.<br /> 전체적으로는 기능 욕심을 덜고 사용자 중심으로  UI/UX를 재정비하여 기획과 디자인의 연결에 대한 이해도를 높일 수 있었습니다.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>리팩토링 포인트</span>
                                <br />
                           작업을 진행하면서 예상보다 유사한 형태의 컴포넌트가 반복적으로 사용되고 있다는 점을 알게 되었습니다.  <br />처음에는 각각을 별도로 구성하였지만, 이후에는 공통되는 부분을 하나의 컴포넌트로 통합하였습니다.  <br />이 과정을 통해 유지보수성과 가독성이 크게 향상되는 것을 경험하였습니다.  <br />앞으로는 재사용성과 일관성을 고려한 설계를 우선적으로 적용할 계획입니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goFigma5}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Figma4;
