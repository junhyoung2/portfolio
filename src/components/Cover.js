import { useEffect, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import gsap from "gsap";

const Cover = () => {
    const coverRef = useRef(null);

    const handleArrowClick = () => {
        const indexSection = document.getElementById("index");
        if (indexSection) {
            indexSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const coverEl = coverRef.current;

        const textEls = coverEl.querySelectorAll(".cover-animated");
        textEls.forEach((el) => {
            el.innerHTML = el.textContent
                .split("")
                .map(
                    (char, i) =>
                        `<span style="display:inline-block; opacity:0;">${
                            char === " " ? "&nbsp;" : char
                        }</span>`
                )
                .join("");
        });

        textEls.forEach((el, idx) => {
            gsap.to(el.querySelectorAll("span"), {
                opacity: 1,
                y: 0,
                stagger: 0.04,
                duration: 0.7,
                delay: 0.2 + idx * 0.2,
                ease: "power3.out",
                y: 0,
            });
        });

        gsap.fromTo(
            coverEl,
            { scale: 0.98, filter: "blur(4px)" },
            { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
        );
    }, []);

    return (
        <section id="cover" ref={coverRef}>
            <div className="cover-content">
                <h2 className="cover-animated">안녕하세요,</h2>
                <h2 className="highlight cover-animated">프론트엔드 개발자</h2>
                <h2 className="cover-animated">박준형입니다.</h2>
                <p>
                    협업과 성장에 진심인 저는, 사용자에게 먼저 다가가는 <br />
                    웹사이트의 <span className="highlight">프론트엔드</span>를
                    담당하고자 합니다.
                    <br />제 웹 포트폴리오를 방문해 주셔서 감사합니다.
                </p>
            </div>
            <div className="arrow-container-1" onClick={handleArrowClick}>
                <IoIosArrowDropdown className="bottom-arrow-1" />
            </div>
        </section>
    );
};

export default Cover;
