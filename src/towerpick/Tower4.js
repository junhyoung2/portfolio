import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Tower4 = () => {
    const navigate = useNavigate();
    const goToTower5 = () => {
        navigate("/tower5");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>USER FLOW</h2>
                    <img
                        src="/images/tower4.png"
                        alt="tower2"
                        className="project-image"
                    />
                    
                   
              
 <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToTower5}
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

export default Tower4;
