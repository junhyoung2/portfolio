import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Shopping2 = () => {
    const navigate = useNavigate();
    const goToShopping3 = () => {
        navigate("/shopping3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                   <img
    src={process.env.PUBLIC_URL + "/images/shopping2.png"}
    alt="shopping2"
    className="project-image"
/>

                    <div className="info-section">
                        <ul>
                            <li>
                                <span>프로젝트 목표 :<br/></span> - 굿즈를 찾는 사용자의 탐색 경험을
                                개선하기 위해, 카테고리 필터, 베스트 상품강조, 기획
                                컨텐츠(작가전, Daily Record)를 포함한 콘텐츠 중심
                                쇼핑몰을 구현하고자 했습니다. 다양한 디바이스에서 일관된
                                사용 경험을 제공하기 위해 반응형 레이아웃을 목표로
                                설정하였습니다.
                            </li><br/>
                            <li>
                                <span>내가 맡은 역할 :<br/></span> - 프로젝트 내에서
                                상세 정보를 볼 수 있는 JSON 데이터를 직접 설계,
                                구현하였으며, 모바일 검색 기능 및 상품 검색 결과
                                및 카테고리 페이지에서 사용되는 공통 상품 카드
                                컴포넌트를 개발하였습니다. 해당 컴포넌트는 상품
                                이미지, 이름, 가격, 브랜드 등의 정보를
                                시각적으로 표현하며, 클릭 시 상세 페이지로
                                이동할 수 있도록 구성되어 있습니다.
                            </li><br/>
                            <li>
                                <span>기능 : <br/></span> - 상품 정보 (json)을 직접
                                구성하여 id, name, price, image, category 등의
                                속성을 명확히 정의하고, 검색 및 필터링 기능에서
                                필요한 구조로 데이터를 설계하였습니다.
                            </li>
                            <li>
                                - 각 상품 브랜드, 카테고리, 베스트 여부 등을 포함하도록 설계하여
                                확장성과 유지보수성을 고려한 형태로 구현하고 관리하였습니다.
                            </li>
                            <li>
                                - 상품 목록과 검색 화면을 위한 반응형 컴포넌트를 개발하였습니다.
                                해상도에 따라 자동으로 상품 배치가 조정되며, 모바일 전용 UI와
                                검색 흐름도 함께 구현하였습니다.
                            </li>
                            <li>
                                - 키워드 추천 → 검색 → 결과 화면으로 이어지는 구조를 설계하여
                                사용자의 검색 플로우를 자연스럽게 구현하였습니다.
                            </li>
                        </ul>
                    </div>

                    <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToShopping3}
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

export default Shopping2;
