import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Paperlogy2 = () => {
    const navigate = useNavigate();
    const goToPaperlogy3 = () => {
        navigate("/paperlogy3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/paperlogy2.png"}
                        alt="paperlogy2"
                        className="project-image"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                <span>
                                    프로젝트 목표 :<br />
                                </span>{" "}
                                - Paperlogy 사이트의 역동적인 애니메이션과 UI
                                디자인에서 영감을 받아, 전체적인 개인 포트폴리오
                                웹사이트를 구성하였으며, 다양한 화면에서 일관된
                                사용자 경험을 제공하기 위해 반응형 레이아웃과
                                스크롤 인터랙션을 적용했습니다.
                            </li>
                            <br />
                            <li>
                                <span>
                                    내가 맡은 역할 :<br />
                                </span>
                                - 전체적인 UI 레이아웃과 캐러셀 슬라이드를
                                설계·구현하고, 각 섹션(About Me, Projects,
                                Skills, Contact)의 콘텐츠 구조와 애니메이션
                                인터랙션을  HTML, CSS, JavaScript을 활용하여 구현했습니다.
                            </li>
                            <br />
                            <li>
                                <span>
                                    기능 : <br />
                                </span>
                                - 메인 컨텐츠인 작업물 소개 섹션은 카드형 레이아웃으로 구성되어, 대표 사진, UI 제작, 사용 기술(Skills), 레이아웃 제작 방식, 참여율, SITE VIEW, GITHUB LINK 등 여러 정보를 한눈에 확인할 수 있도록 설계했습니다.
                            </li>
                          
                            <li>
                                데스크톱과 모바일 화면에서 레이아웃과 애니메이션이 자연스럽게 조정되며, GSAP을 활용해 스크롤 시 컨텐츠가 등장하도록 하여 시각적 몰입감을 제공합니다.
                            </li>
                           
                        </ul>
                    </div>

                    <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToPaperlogy3}
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

export default Paperlogy2;
