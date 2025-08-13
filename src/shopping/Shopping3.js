import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Shopping3 = () => {
    const navigate = useNavigate();
    const goToShopping4 = () => {
        navigate("/shopping4");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>Ririm</h2>
                    <img
                        src={process.env.PUBLIC_URL + "/images/shopping3.png"}
                        alt="shopping3"
                        className="project-image"
                    />
                    
                    <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToShopping4}
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

export default Shopping3;
