const Publishing = () => {
    const projects = [
        {
            title: "YES24 상세 페이지",
            img: "/images/yes24.png",
            skills: ["HTML", "CSS"],
            description:
                "온라인 서점 사이트처럼 책 사진 클릭 시 ROTATE 되어 책 측/뒷면 표현",
            github: "https://github.com/junhyoung2/bookstore",
            site: "https://junhyoung2.github.io/bookstore/index.html",
        },
        {
            title: "Gallery",
            img: "/images/gallery.png",
            skills: ["HTML", "CSS", "JavaScript"],
            description:
                "체크박스/라디오 버튼으로 3D 회전 메뉴 및 그리드 화면 전환",
            github: "https://github.com/junhyoung2/junhyoung2.github.io/tree/main/galley",
            site: "https://junhyoung2.github.io/galley/index.html",
        },
        {
            title: "이미지 캐러셀",
            img: "/images/carousel.png",
            skills: ["HTML", "CSS", "JavaScript"],
            description:
                "양방향 무한 루프 이동 가능, 하단 dot 클릭 시 해당 인덱스로 이동",
            github: "https://github.com/junhyoung2/junhyoung2.github.io/tree/main/javascript/img_carousel",
            site: "https://junhyoung2.github.io/javascript/img_carousel/index.html",
        },
        {
            title: "Grid",
            img: "/images/grid.png",
            skills: ["HTML", "CSS", "JavaScript"],
            description:
                "쇼핑몰 컨셉, 홀수/짝수/전체 규칙에 따라 데이터를 보여주기 위한 기능",
            github: "https://github.com/junhyoung2/junhyoung2.github.io/tree/main/javascript/0521",
            site: "https://junhyoung2.github.io/javascript/0521/index.html",
        },
    ];

    return (
        <div id="publishing">
            <h2>PUBLISHING</h2>
            {projects.map((project, index) => (
                <div key={index} className="form">
                    <h2>{project.title}</h2>
                    <img
                        src={process.env.PUBLIC_URL + project.img}
                        alt={project.title}
                    />
                    <p>제작에 사용된 스킬 :</p>
                    <ul>
                        {project.skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                    <p>
                        핵심 기능 : <br />
                        {project.description}
                    </p>
                    <p>
                        배포방식 : GITHUB <br />
                        <br />
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GITHUB 바로가기 &gt;
                        </a>
                        <br />
                        <a
                            href={project.site}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SITE URL 바로가기 &gt;
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Publishing;
