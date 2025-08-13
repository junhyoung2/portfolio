import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Shopping4= () => {
    const navigate = useNavigate();
    const goToShopping5 = () => {
        navigate("/shopping5");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>Ririm</h2>
                    <img
                        src="/images/shopping4.png"
                        alt="shopping4"
                        className="project-image"
                    />
                    
                    <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToShopping5}
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

export default Shopping4;
