import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Shopping5 = () => {
    const navigate = useNavigate();
    const goToShopping6 = () => {
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
                                <span>
                                    어려웠던 점 및 해결방법
                                    <br /> <br />
                                </span>{" "}
                                처음에는 어떤 굿즈 아이템을 선택해야 할지 명확한
                                기준이 없어, 초기에 많은 고민이 있었습니다.
                                사용자 입장에서는 매력적인 상품이 무엇인지
                                판단하기 어려웠고, 시장 조사 경험도
                                부족했었습니다. 특히 상품 카테고리 정리나 이미지
                                편집 과정에서 반복적인 수정이 발생해 많은 시간을
                                소요했습니다.
                            </li>
                            <li>
                                조별 프로젝트를 진행하면서 소통의 중요성을 크게
                                느꼈습니다. 초기에는 기획 의도와 디자인 요소가
                                개발 과정에서 제대로 반영되지 않아 UI나 기능에서
                                여러 번 수정이 발생했습니다. 피그마 공유나 코드
                                리뷰, 기능 구현 방식에 대한 협의가 원활히
                                이뤄지지 않으면 개발 후 수정 부담이 커진다는
                                점을 체감했습니다. 이러한 경험을 통해 기획,
                                디자인, 프론트엔드 개발 간의 긴밀한
                                커뮤니케이션이 프로젝트 완성도를 좌우한다는 것을
                                깊이 깨달았습니다.
                            </li> <br />
                            <li>
                                <span>
                                    리팩토링 포인트 <br /> <br />
                                </span>{" "}
                               처음에는 단순한 상품 나열에 집중하였지만, 이후
                                필터링과 정렬 등 기능 확장을 고려하여 JSON
                                구조를 유연하게 설계하였습니다. 각 속성의 역할을
                                명확히 정의하고, 실제 데이터베이스 연동도 염두에
                                두며 구조화하였습니다. 상품별 설명 문구나 서브
                                타이틀을 아이템에 맞춰 콘텐츠 전달력을
                                높였습니다.
                            </li>
                        </ul>
                    </div>

                    <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToShopping6}
                            >
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Shopping5;
