import React from "react";
import { useNavigate } from "react-router-dom";
const Shopping1 = () => {
    const navigate = useNavigate();
    const goToShopping2 = () => {
        navigate("/shopping2");
    };

    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>Ririm</h2>
                    <img
    src={process.env.PUBLIC_URL + "/images/mainshopping.png"}
    alt="mainshopping"
    className="project-image"
/>
                    <p className="description">
                        Ririm는 ‘릴리(백합)’의 청초하고 순수한 이미지와
                        ‘꿈(Dream)’의 몽환적이고 감성적인 무드를 담은 이름으로,
                        두 단어를 조합해 탄생한 프로젝트입니다.
                    </p>
                    <div className="info-section">
                        <p className="info-title">제작에 사용된 스킬 :</p>
                        <p>Figma , React/Router, SCSS, GIT/GitHub</p>
                    </div>
                    <div className="info-section">
                        <p className="info-title">프로젝트 개요</p>
                        <ul>
                            <li>
                                <span>UI 디자인 방식 :</span> Figma를 활용해
                                디자인 시스템을 먼저 구축한 후, 이를 바탕으로
                                실제 UI를 코드로 구현했습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> grid를
                                기반으로 구성되었으며, 콘텐츠는 카드 형태로
                                정리해 일관된 구조와 가독성을 높였습니다.
                            </li>
                            <li>
                                <span>플러그인 :</span> REACT-ICONS,
                                slick-carousel, react-router, SCSS
                            </li>
                            <li>
                                <span>제작기간 :</span> 07.07~07.11 (5D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> 80%(5인 팀 프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> GitHub
                            </li>
                        </ul>
                    </div>

                    <ul className="meta-links">
                        <li>
                            <div
                                className="nav-link"
                                onClick={goToShopping2}
                                style={{ cursor: "pointer" }}
                            >
                                <span>OVERVIEW ＞</span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://github.com/junhyoung2/goods-master"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>GITHUB ＞</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://junhyoung2.github.io/goods-master/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>SITE URL ＞</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Shopping1;
