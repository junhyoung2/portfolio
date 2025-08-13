import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Blog2 = () => {
    const navigate = useNavigate();
    const goToBlog3 = () => {
        navigate("/blog3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/blog1.png"}
                        alt="blog1"
                        className="project-image-end"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                <span>
                                    프로젝트 목표 :<br />
                                </span>{" "}
                                단순한 퍼블리싱을 넘어서 브랜드 사이트처럼 보일
                                수 있도록 UI 구성과 시각적 완성도에 신경 썼으며,
                                디자인 단계부터 구조를 기획하는 것을 목표로
                                하였습니다.
                                <br />
                                Figma로 전체 화면 흐름을 사전 설계한 뒤, HTML과
                                CSS를 통해 데스크탑 환경에 최적화된 구조로
                                구현하였습니다.
                                <br />
                                이번 프로젝트는 반응형 설계는 고려하지 않고
                                데스크탑 화면 중심으로 개발되었으며, 정적인
                                콘텐츠를 시각적으로 효과적으로 전달하는 것에
                                중점을 두었습니다.
                            </li>
                            <li>
                                <span>
                                    내가 맡은 역할 :<br />
                                </span>{" "}
                                기획, 디자인, 개발 모든 과정을 작업하였으며
                                헤더, 메인, 푸터 전 영역 레이아웃을 설계하고
                                구현하였습니다. <br />
                                콘텐츠 섹션 구성 뿐 아니라 버튼 호버 효과,
                                애니메이션 처리 등 세부적인 요소까지 직접
                                구현하였습니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToBlog3}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog2;
