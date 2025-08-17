// src/App.js

import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./app.scss";

// 페이지 컴포넌트들 import
import HomePage from "./components/HomePage";
import Shopping1 from "./shopping/Shopping1";
import Shopping2 from "./shopping/Shopping2";
import Shopping3 from "./shopping/Shopping3";
import Shopping4 from "./shopping/Shopping4";
import Shopping5 from "./shopping/Shopping5";
import Tower1 from "./towerpick/Tower1";
import Tower2 from "./towerpick/Tower2";
import Tower3 from "./towerpick/Tower3";
import Tower4 from "./towerpick/Tower4";
import Tower5 from "./towerpick/Tower5";
import End1 from "./endtalk/End1";
import End2 from "./endtalk/End2";
import End3 from "./endtalk/End3";
import End4 from "./endtalk/End4";
import Quiz1 from "./Quiz/Quiz1";
import Quiz2 from "./Quiz/Quiz2";
import Quiz3 from "./Quiz/Quiz3";
import Blog1 from "./blog/Blog1";
import Blog2 from "./blog/Blog2";
import Blog3 from "./blog/Blog3";
import Figma1 from "./figma/Figma1";
import Figma2 from "./figma/Figma2";
import Figma3 from "./figma/Figma3";
import Figma4 from "./figma/Figma4";
import Clonecoding1 from "./clonecoding/Clonecoding1";
import Publishing from "./components/Publishing";
import Clonecoding2 from "./clonecoding/Clonecoding2";
import Clonecoding3 from "./clonecoding/Clonecoding3";
import Clonecoding4 from "./clonecoding/Clonecoding4";
import Clonecoding5 from "./clonecoding/Clonecoding5";
import Myproject from "./components/Myproject"; 

const App = () => {
  return (
    <HashRouter>
       <ScrollToTop />
      <Routes>
       
        <Route path="/" element={<HomePage />} />

        {/* 쇼핑 페이지 */}
        <Route path="/shopping1" element={<Shopping1 />} />
        <Route path="/shopping2" element={<Shopping2 />} />
        <Route path="/shopping3" element={<Shopping3 />} />
        <Route path="/shopping4" element={<Shopping4 />} />
        <Route path="/shopping5" element={<Shopping5 />} />

        {/* 타워픽 프로젝트 */}
        <Route path="/tower1" element={<Tower1 />} />
        <Route path="/tower2" element={<Tower2 />} />
        <Route path="/tower3" element={<Tower3 />} />
        <Route path="/tower4" element={<Tower4 />} />
        <Route path="/tower5" element={<Tower5 />} />       
        {/* 끝말이 프로젝트*/}
        
        <Route path="/endtalk1" element={<End1 />} />
        <Route path="/endtalk2" element={<End2 />} />
        <Route path="/endtalk3" element={<End3 />} />
        <Route path="/endtalk4" element={<End4 />} />
         {/* 진격거 프로젝트 */}
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        {/* 블로그 프로젝트*/}
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
         {/* 피그마 프로젝트*/}
        <Route path="/figma1" element={<Figma1 />} />
        <Route path="/figma2" element={<Figma2 />} />
        <Route path="/figma3" element={<Figma3 />} />
        <Route path="/figma4" element={<Figma4 />} />

        {/* 클론 코딩 페이지 */}
        <Route path="/clone-coding" element={<Clonecoding1 />} />
        <Route path="/clone-coding/tesla" element={<Clonecoding2 />} />
        <Route path="/clone-coding/netflix" element={<Clonecoding3 />} />
        <Route path="/clone-coding/airbnb" element={<Clonecoding4 />} />
        <Route path="/clone-coding/mydays" element={<Clonecoding5 />} />

        <Route path="/publishing" element={<Publishing />} />

        {/* Myproject 페이지 */}
        <Route path="/myproject" element={<Myproject />} />
      </Routes>
    </HashRouter>
  );
};

export default App;