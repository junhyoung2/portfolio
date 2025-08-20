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
                        src={
                            process.env.PUBLIC_URL + "/images/mainshopping.png"
                        }
                        alt="mainshopping"
                        className="project-image"
                    />
                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title"> - Description </span> <br /> Figma ,
                                Ririm는 ‘릴리(백합)’의 청초하고 순수한 이미지와
                        ‘꿈(Dream)’의 몽환적이고 감성적인 무드를 담은 이름으로,
                        두 단어를 조합해 탄생한 프로젝트입니다.
                            </li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <ul>
                            <li>
                                <span className="info-title"> - 프로젝트 개요</span> <br /> <br />
                                <span>UI 디자인 방식 :</span> <br /> - Figma를
                                활용해 디자인 시스템을 먼저 구축한 후, 이를
                                바탕으로 실제 UI를 코드로 구현했습니다.
                            </li>
                            <li>
                                <span>레이아웃 제작 방식 :</span> <br />
                                - Grid를 기반으로 구성했으며, 콘텐츠는 카드 형태로
                                정리해 일관성과 가독성을 높였습니다. Grid를
                                사용하면 다양한 화면 크기에서 반응형 배치를 쉽게
                                구현할 수 있고, 요소 간 간격과 정렬을 직관적으로
                                관리할 수 있어 유지보수와 수정을 염두에 두고
                                설계했습니다.
                            </li>
                            <li>
                                <span>제작에 사용된 스킬 :</span> <br />
                                - React/Router, SCSS, GIT/GitHub
                            </li>
                            <li>
                                <span>플러그인 :</span> <br />
                               -  REACT-ICONS, slick-carousel, react-router, SCSS
                            </li>
                            <li>
                                <span>제작기간 :</span> <br /> - 07.07~07.11 (5D)
                            </li>
                            <li>
                                <span>제작 참여율 :</span> <br />
                                - 80%(5인 팀 프로젝트)
                            </li>
                            <li>
                                <span>배포방식 :</span> <br />
                              -   GitHub
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
