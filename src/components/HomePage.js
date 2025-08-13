
import Aboutme from "./Aboutme";
import Cover from "./Cover";
import Index from "./Index";
import Myproject from "./Myproject";
import Skills from "./Skills";


const HomePage = () => {
  return (
    <div id="app">
    
      <Cover />
      <Index />
      <Aboutme />
      <Skills />
      <Myproject />
    </div>
  );
};

export default HomePage;