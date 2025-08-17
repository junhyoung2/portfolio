
import Aboutme from "./Aboutme";
import Cover from "./Cover";
import Index from "./Index";
import Myproject from "./Myproject";
import Skills from "./Skills";
import End from "./End";


const HomePage = () => {
  return (
    <div id="app">
    
      <Cover />
      <Index />
      <Aboutme />
      <Skills />
      <Myproject />
      <End />
    </div>
  );
};

export default HomePage;