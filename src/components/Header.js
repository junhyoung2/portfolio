// src/components/Header.jsx
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleScrollToSection = (sectionId) => {
        setIsMenuOpen(false);

        // 현재 페이지가 메인 페이지('/')가 아니라면, state와 함께 메인 페이지로 이동합니다.
        if (location.pathname !== "/") {
            // `setTimeout` 대신 navigate의 state를 사용하여 섹션 ID를 전달
            navigate("/", { state: { scrollTo: sectionId } });
        } else {
            // 이미 메인 페이지라면 바로 스크롤합니다.
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div id="header">
            <IoChevronBack className="back" onClick={handleBack} />
            <p onClick={() => handleScrollToSection("cover")}>PJH</p>
            <IoIosMenu className="menu" onClick={toggleMenu} />
            <div className={`menu-dropdown ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => handleScrollToSection("cover")}>
                        COVER
                    </li>
                    <li onClick={() => handleScrollToSection("index")}>
                        INDEX
                    </li>
                    <li onClick={() => handleScrollToSection("aboutme")}>
                        ABOUT ME
                    </li>
                    <li onClick={() => handleScrollToSection("skills")}>
                        SKILLS & TOOLS
                    </li>
                    <li onClick={() => handleScrollToSection("myproject")}>
                        MY WORKS AND PROJECTS
                    </li>
                    <li onClick={() => handleScrollToSection("end")}>END</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
