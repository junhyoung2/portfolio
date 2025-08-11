import "./app.scss";
import Aboutme from "./components/Aboutme";
import Blackheader from "./components/Blackheader";
import Cover from "./components/Cover";
import Index from "./components/Index";
import Myproject from "./components/Myproject";
import Skills from "./components/Skills";
import Whiteheader from "./components/Whiteheader";
const App = () => {
    return (
        <>
            <Whiteheader/>
            <Blackheader/>
            <Cover />
            <Index />
            <Aboutme/>
            <Skills/>
            <Myproject/>
        </>
    );
};

export default App;
