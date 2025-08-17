import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Tower2 = () => {
    const navigate = useNavigate();
    const goToTower3 = () => {
        navigate("/tower3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/tower2.png"}
                        alt="tower2"
                        className="project-image"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                <span>
                                    프로젝트 목표 :<br />
                                </span>{" "}
                                React와 데이터베이스를 연동하여 사용자 입력 및
                                예약 흐름에 기반한 기능을 구현하여 컴포넌트
                                재사용성과 개발 효율성을 고려하여 구조화 된
                                설계를 진행하였습니다
                            </li>
                            <li>
                                <span>
                                    내가 맡은 역할 :<br />
                                </span>{" "}
                                GitHub에서 master 브랜치 병합 및 코드 리뷰를
                                통하여 코드를 통합하는 작업을 진행하였습니다.{" "}
                                <br /> 또한, 팀원들과의 협업을 통해 컴포넌트
                                재정의 및 구조 정리 작업을 진행하여 재사용성 과
                                유지보수성을 높였으며, 전체 코드 취합 및
                                컴포넌트 간 연결 작업도 맡아 프로젝트의 중심
                                구조를 정리했습니다.
                            </li>

                            <li>
                                <span>
                                    기능 :<br />{" "}
                                </span>{" "}
                                사용자 예약 과정 컴포넌트 UI 및 기능 구현
                                <br />
                                - 예약 신청, 예약 확인, 예약 완료 화면 <br />
                                - 날짜 및 시간 선택 컴포넌트
                                <br />
                                - 예약 가능 여부 컴포넌트
                                <br />
                                - 결제 금액 컴포넌트
                                <br />
                                - 주차장 자리 선택 컴포넌트
                                <br />
                                (제작 참여율 80%)
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToTower3}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tower2;
