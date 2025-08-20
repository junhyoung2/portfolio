import { useNavigate } from "react-router-dom";

const Clonecoding1 = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "TESLA",
      img: "tesla.png",
      overview: "/clone-coding/tesla",
      github: "https://github.com/junhyoung2/junhyoung2.github.io/tree/main/tesla",
      site: "https://junhyoung2.github.io/tesla/index.html",
    },
    {
      title: "NETFLIX",
      img: "netflix.png",
      overview: "/clone-coding/netflix",
      github: "https://github.com/junhyoung2/netflix",
      site: "https://junhyoung2.github.io/netflix/",
    },
    {
      title: "AIRBNB",
      img: "airbnb.png",
      overview: "/clone-coding/airbnb",
      github: "https://github.com/junhyoung2/junhyoung2.github.io/tree/main/airbnb",
      site: "https://junhyoung2.github.io/airbnb/index.html",
    },
    {
      title: "MY DAYS",
      img: "mydays.png",
      overview: "/clone-coding/mydays",
      github: "https://github.com/junhyoung2/myday",
      site: "https://junhyoung2.github.io/myday/",
      fullWidth: true,
    },
  ];

  return (
    <div className="clone-container" id="clonecoding1">
      <h2>CLONE CODING <br /><br />PROJECT</h2>

      <div className="clone-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`clone-item ${project.fullWidth ? "full-width" : ""}`}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/${project.img}`}
              alt={project.title.toLowerCase()}
            />
            <div className="clone-meta">
              <h3 className="meta-title">{project.title}</h3>
              <ul className="meta-links">
                <li>
                  <span>OVERVIEW</span>
                  <div
                    className="nav-link"
                    onClick={() => navigate(project.overview)}
                  >
                    바로가기 ＞
                  </div>
                </li>
                <li>
                  <span>GITHUB</span>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    바로가기 ＞
                  </a>
                </li>
                <li>
                  <span>SITE URL</span>
                  <a href={project.site} target="_blank" rel="noreferrer">
                    바로가기 ＞
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clonecoding1;
