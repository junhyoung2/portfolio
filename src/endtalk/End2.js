import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const End2 = () => {
    const navigate = useNavigate();
    const goTOEnd3 = () => {
        navigate("/endtalk3");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>OVERVIEW</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/endtalk2.png"}
                        alt="end2"
                        className="project-image-end"
                    />

                    <div className="info-section">
                        <ul>
                            <li>
                                사용자의 입력을 기준으로 단어가 이어지는
                                끝말잇기 흐름을 순차적으로 구성하였습니다.
                                <br />
                                현재는 자유롭게 단어를 주고받는 구조이며, <br />
                                추후 우리말샘 API를 연동해 실제 존재하는 단어만
                                사용 가능하도록 구현할 계획입니다.
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goTOEnd3}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default End2;
