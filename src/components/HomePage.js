import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Aboutme from "./Aboutme";
import Cover from "./Cover";
import Index from "./Index";
import Myproject from "./Myproject";
import Skills from "./Skills";
import End from "./End";
const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div id="app">
            <Cover />
            <Index />
            <Aboutme />
            <Skills />
            <Myproject />
            <End />{" "}
        </div>
    );
};

export default HomePage;
