import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="one-half column">
            <h4>Hi, my name is </h4>
            <h2>Alex Zhu</h2>
            <Link
              to={require("../files/pdf/YTResume.pdf")}
              target="_blank"
              rel="noreferrer"
              download="ZYResume.pdf"
            >
              <button className="button">Download Resume</button>
            </Link>
            <div className="row icons">
              <div className="icon">
                <div className="bubble shadow mini top iconText">
                  Yueting (Alex) Zhu
                </div>
                <a
                  // onClick={() => {
                  //   navigator.clipboard.writeText("1292860312");
                  //   alert("Copied to the Clipboard");
                  // }}
                  href="https://www.linkedin.com/in/alexzyt"
                  target="_blank"
                >
                  <img
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/LinkedIn/#0A66C2"
                    style={{cursor:"pointer"}}
                  />
                </a>
                <div className="clickToCopy">Click to Copy</div>
              </div>
              <div className="icon">
                <div className="bubble shadow mini top iconText">AIex05</div>
                <a
                  href="https://github.com/AIex05"
                  target="_blank"
                >
                  <img
                    id="github"
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/github/#15a5e8"
                  />
                </a>
                <div className="clickToCopy">Click to View</div>
              </div>
              <div className="icon">
                <div className="bubble shadow mini top iconText">
                  (774)-701-8877
                </div>
                <a
                  onClick={() => {
                    navigator.clipboard.writeText("7747018877").then(function(){alert("Copied to the Clipboard");})
                  }}
                  href="sms:+12125550690"
                >
                  <img
                    id="phone"
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/livechat/#15a5e8"
                  />
                </a>
                <div className="clickToCopy">Click to Text</div>
              </div>
              <div className="icon">
                <div className="bubble shadow grow top iconText">
                  yzhu8@wpi.edu
                </div>
                <a
                  onClick={() => {
                    window.location = "mailto:yzhu8@wpi.edu";
                    // navigator.clipboard.writeText("yzhu8@wpi.edu").then(function(){alert("Copied to the Clipboard");});
                  }}
                >
                  <img
                    id="gmail"
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/gmail/#15a5e8"
                    style={{cursor:"pointer"}}
                  />
                </a>
                <div className="clickToCopy">Click to Mail</div>
              </div>
              <div className="icon">
                <div className="bubble shadow mini top iconText">ZYT-Alex</div>
                <a
                  onClick={() => {
                    navigator.clipboard.writeText("ZYT-Alex").then(function(){alert("Copied to the Clipboard");});
                  }}
                  target="_blank"
                >
                  <img
                    id="wechat"
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/wechat/#15a5e8"
                    style={{cursor:"pointer"}}
                  />
                </a>
                <div className="clickToCopy">Click to Copy</div>
              </div>
            </div>
          </div>
          <div className="one-half column">
            <img
              src={require("../files/image/profile.jpg")}
              alt="Profile picture"
              className="picture"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="twelve columns"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <h1 style={{ fontSize: "5rem" }}>About Me</h1>
            <div class="grid">
              <figure class="effect-lily">
                <img src={require("../files/image/Gompei.jpeg")} alt="img12" />
                <figcaption>
                  <div>
                    <h2 style={{ color: "#FFFFFF" }}>
                      <span>Education</span>
                    </h2>
                    <p>Degrees I have accomplished</p>
                  </div>
                  <Link to="/about">View more</Link>
                </figcaption>
              </figure>
              <figure class="effect-lily">
                <img src={require("../files/image/LineGraph.png")} alt="img1" />
                <figcaption>
                  <div>
                    <h2>
                      <span>Skills</span>
                    </h2>
                    <p>Technical skills that I have developed</p>
                  </div>
                  <Link to="/skills">View more</Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div
              className="twelve columns"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              <div class="grid">
                <figure class="effect-lily">
                  <img
                    src={require("../files/image/AboutMeSnow.png")}
                    alt="img12"
                  />
                  <figcaption>
                    <div>
                      <h2>
                        <span>Hobbies</span>
                      </h2>
                      <p>I also love to play besides learning</p>
                    </div>
                    <Link to="/about">View more</Link>
                  </figcaption>
                </figure>
                <figure class="effect-lily">
                  <img
                    src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg"
                    alt="img1"
                  />
                  <figcaption>
                    <div>
                      <h2>
                        <sapn>Projects</sapn>
                      </h2>
                      <p>Wonderful projects I have done</p>
                    </div>
                    <Link to="/projects">View more</Link>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
