import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Quiz2 = () => {
    const navigate = useNavigate();
    const goToQuiz3 = () => {
        navigate("/quiz3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/quiz2.png"}
                        alt="quiz2"
                        className="project-image-end"
                    />
                    <div className="info-section">
                        <ul>
                            <li>
                                <span>
                                    프로젝트 목표 :<br />
                                </span>
                                - 사용자가 선택한 카테고리에 따라 퀴즈를
                                시작하고, 질문과 답변을 카드 형태로 순차적으로
                                확인할 수 있도록 구현하며, 버튼 클릭을 통해
                                사용자가 답변을 확인하고 다음 문제로 넘어가는
                                방식으로 구성하였습니다.
                            </li>
                            <br />
                            <li>
                                <span>
                                    내가 맡은 역할 :<br />
                                </span>
                                - 서비스 기획부터 전체 사용자 흐름 설계를 직접
                                진행하였습니다. - REACT를 활용하여 컴포넌트
                                구조를 설계하고 SCSS를 사용하여 스타일링, 변수
                                정리를 통하여 일관되고 효율적인 디자인을
                                구현하였습니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToQuiz3}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Quiz2;
