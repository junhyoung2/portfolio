import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const End3 = () => {
    const navigate = useNavigate();
    const goTOEnd4 = () => {
        navigate("/endtalk4");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>WIRE FRAME</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/endtalk3.png"}
                        alt="end3"
                        className="project-image"
                    />

                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goTOEnd4}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default End3;
