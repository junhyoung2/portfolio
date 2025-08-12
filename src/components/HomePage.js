
import Aboutme from "./Aboutme";
import Cover from "./Cover";
import Index from "./Index";
import Myproject from "./Myproject";
import Skills from "./Skills";
// import Blackheader from "./Blackheader";
// import Whiteheader from "./Whiteheader";

const HomePage = () => {
  return (
    <div id="app">
      {/* <Whiteheader/> */}
      {/* <Blackheader/> */}
      <Cover />
      <Index />
      <Aboutme />
      <Skills />
      <Myproject />
    </div>
  );
};

export default HomePage;