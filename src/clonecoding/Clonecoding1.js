import { useNavigate } from "react-router-dom";

const Clonecoding1 = () => {
  const navigate = useNavigate();

  return (
    <div className="clone-container" id="clonecoding1">
      <h2>
        CLONE CODING <br/><br/>PROJECT
      </h2>

      <div className="clone-grid">
        {/* Tesla */}
        <div className="clone-item">
         <img src={process.env.PUBLIC_URL + "/images/tesla.png"} alt="tesla" />
          <div className="clone-meta">
            <h3 className="meta-title">TESLA</h3>
            <ul className="meta-links">
              <li>
                <span>OVERVIEW </span>
                <div
                  className="nav-link"
                  onClick={() => navigate("/clone-coding/tesla")}
                  style={{ cursor: "pointer" }}
                >
                  바로가기 ＞
                </div>
              </li>
              <li>
                <span>GITHUB </span>
                <a
                  href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/tesla"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
              <li>
                <span>SITE URL </span>
                <a
                  href="https://junhyoung2.github.io/tesla/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Netflix */}
        <div className="clone-item">
      <img src={process.env.PUBLIC_URL + "/images/netflix.png"} alt="netflix" />
          <div className="clone-meta">
            <h3 className="meta-title">NETFLIX</h3>
            <ul className="meta-links">
              <li>
                <span>OVERVIEW </span>
                <div
                  className="nav-link"
                  onClick={() => navigate("/clone-coding/netflix")}
                  style={{ cursor: "pointer" }}
                >
                  바로가기 ＞
                </div>
              </li>
              <li>
                <span>GITHUB </span>
                <a
                  href="https://github.com/junhyoung2/netflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
              <li>
                <span>SITE URL </span>
                <a
                  href="https://junhyoung2.github.io/netflix/"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Airbnb */}
        <div className="clone-item">
<img src={process.env.PUBLIC_URL + "/images/airbnb.png"} alt="airbnb" />
          <div className="clone-meta">
            <h3 className="meta-title">AIRBNB</h3>
            <ul className="meta-links">
              <li>
                <span>OVERVIEW </span>
                <div
                  className="nav-link"
                  onClick={() => navigate("/clone-coding/airbnb")}
                  style={{ cursor: "pointer" }}
                >
                  바로가기 ＞
                </div>
              </li>
              <li>
                <span>GITHUB </span>
                <a
                  href="https://github.com/junhyoung2/junhyoung2.github.io/tree/main/airbnb"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
              <li>
                <span>SITE URL </span>
                <a
                  href="https://junhyoung2.github.io/airbnb/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* My Days - full width */}
        <div className="clone-item full-width">
     <img src={process.env.PUBLIC_URL + "/images/mydays.png"} alt="mydays" />
          <div className="clone-meta">
            <h3 className="meta-title">MY DAYS</h3>
            <ul className="meta-links">
              <li>
                <span>OVERVIEW </span>
                <div
                  className="nav-link"
                  onClick={() => navigate("/clone-coding/mydays")}
                  style={{ cursor: "pointer" }}
                >
                  바로가기 ＞
                </div>
              </li>
              <li>
                <span>GITHUB </span>
                <a
                  href="https://github.com/junhyoung2/myday"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
              <li>
                <span>SITE URL </span>
                <a
                  href="https://junhyoung2.github.io/myday/"
                  target="_blank"
                  rel="noreferrer"
                >
                  바로가기 ＞
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clonecoding1;
