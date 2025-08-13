import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Tower3 = () => {
    const navigate = useNavigate();
    const goToTower4 = () => {
        navigate("/tower4");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>DESIGN SYSTEM</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/tower3.png"}
                        alt="tower3"
                        className="project-image"
                    />

                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToTower4}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tower3;
