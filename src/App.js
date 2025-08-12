// src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

// 페이지 컴포넌트들 import
import HomePage from "./components/HomePage"; // 기존 App.js의 내용을 담을 새 컴포넌트
import Shopping1 from "./shopping/Shopping1";
import Tower1 from "./towerpick/Tower1";
import End1 from "./endtalk/End1";
import Quiz1 from "./Quiz/Quiz1";
import Blog1 from "./blog/Blog1";
import Figma1 from "./figma/Figma1";
import Clonecoding1 from "./clonecoding/Clonecoding1";
import Publishing from "./components/Publishing"; // Publishing 컴포넌트 경로

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* '/' 경로로 접속하면 메인 스크롤 페이지를 보여줍니다. */}
        <Route path="/" element={<HomePage />} />

        {/* 각 프로젝트의 상세 페이지 경로를 설정합니다. */}
        <Route path="/shopping" element={<Shopping1 />} />
        <Route path="/tower" element={<Tower1 />} />
        <Route path="/endtalk" element={<End1 />} />
        <Route path="/quiz" element={<Quiz1 />} />
        <Route path="/blog" element={<Blog1 />} />
        <Route path="/figma" element={<Figma1 />} />
        <Route path="/clone-coding" element={<Clonecoding1 />} />
        <Route path="/publishing" element={<Publishing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;