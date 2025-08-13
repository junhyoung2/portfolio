import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Figma3 = () => {
    const navigate = useNavigate();
    const goTOFigma4 = () => {
        navigate("/figma4");
    };
    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>DESIGN SYSTEM</h2>
                    <img
                        src="/images/figma3.png"
                        alt="end3"
                        className="project-image"
                    />
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goTOFigma4}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Figma3;
