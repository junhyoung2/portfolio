import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Figma2 = () => {
    const navigate = useNavigate();
    const goTOFigma3 = () => {
        navigate("/figma3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/figma2.png"}
                        alt="figma2"
                        className="project-image"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                <span>
                                    프로젝트 목표 : <br />
                                </span>
                                <li>- 당구장, 노래방, 피시방 등 다양한 놀이시설 정보를
                                한눈에 확인할 수 있는 플랫폼을 기획하였으며,
                                사용자 위치를 기반으로 주변 시설을 탐색할 수
                                있는 UI 제공을 목표로 하였습니다. </li>
                                <li>
                                - 단순한 검색 기능을 넘어, 위치 안내·리뷰·상세
                                정보 확인 등 다양한 행동을 자연스럽게 유도할 수
                                있도록 구조를 설계하였습니다.
                                </li>
                            </li>
                            <li>
                                <span>
                                    내가 맡은 역할 : <br />
                                </span>
                                <li>
                                - 기획부터 디자인까지 모든 과정을 담당했으며, 특히
                                화면 간 흐름 설계와 컴포넌트 단위 ui 설계에
                                집중하였습니다.
                             </li>
                             <li>
                                - 상세화면에는 운영시간, 현재 위치로부터의 거리 등
                                핵심 정보를 시각적으로 쉽게 전달 할 수 있도록
                                정보 우선 순위를 고려한 레이아웃을
                                구성하였습니다.
                                </li>
                            </li>
                            <li>
                                <span>
                                    기능: <br />
                                </span>
                                <li>
                                - 위치 기반 검색: 사용자의 현재 위치를 감지하여
                                - 주변 놀이시설을 검색 <br />
                                - 카테고리 필터: 놀이공원, 키즈카페, VR방,
                                - 테마파크 등 카테고리별 검색 <br />
                                - 시설 상세 정보 제공: 주소, 운영시간, 가격, 리뷰,
                                - 혼잡도 등 표시 <br />
                                - 리뷰 및 평점 시스템: 사용자 리뷰 작성 및 별점
                                평가 기능
                                <br />
                                - 실시간 혼잡도 표시(추가 고려)
                                <br />
                                - 즐겨찾기 기능(로그인 필요)
                                <br />
                                - 서비스 진입 시 위치는 디폴트로 현재 위치
                                (디바이스 설정에 따라 상이)
                                </li>
                                <br />
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goTOFigma3}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Figma2;
