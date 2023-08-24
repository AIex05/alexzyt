import { useCollapse } from "react-collapsed";
import { s3 } from "../functions/getS3";
import useImage from "../hooks/useImage";
const About = () => {
  const props = { duration: 1000 };

  const displayImage = (input, height="600px", width="auto", alt="null") => {
    return (
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {!input.image && <p>Loading...</p>}
        {input.error && <p>{input.error}</p>}
        {input.image && (
          <img src={URL.createObjectURL(
            new Blob([input.image.buffer], { type: input.info.ContentType } /* (1) */)
          )} alt={alt} width={width} height={height} />
        )}
        
      </div>
    );
  };

  function CollapsibleSki({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="skiAndSnowboard container">
        <div
          className="row"
          style={{ display: "flex", alignContent: "center" }}
        >
          <div className="ten columns">
            <h4>Ski & Snowboard</h4>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
            {displayImage(useImage("files/image/SkiPic1.jpeg", s3))}
            {displayImage(useImage("files/image/SkiPic2.jpeg", s3))}
            {displayImage(useImage("files/image/SkiPic3.jpeg", s3))}
            {displayImage(useImage("files/image/SkiPic4.jpeg", s3))}
            {displayImage(useImage("files/image/SkiPic5.jpeg", s3))}
            {displayImage(useImage("files/image/RidingOnCable.png", s3))}
            {displayImage(useImage("files/image/WachussetSki.png", s3))}
            {displayImage(useImage("files/image/SkiSelfie.jpeg", s3))}
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravel({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="travel container">
        <div
          className="row"
          style={{ display: "flex", alignContent: "center" }}
        >
          <div className="ten columns">
            <h4>Travel</h4>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <CollapsibleTravelHokaido props={props}></CollapsibleTravelHokaido>
          <CollapsibleTravelNara props={props}></CollapsibleTravelNara>
          <CollapsibleTravelTokyo props={props}></CollapsibleTravelTokyo>
          <CollapsibleTravelOsaka props={props}></CollapsibleTravelOsaka>
        </section>
      </div>
    );
  }

  function CollapsibleTravelHokaido({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            alignContent: "left",
            marginBottom: "10px",
          }}
        >
          <div className="ten columns">
            <h5>Hokaido 北海道</h5>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
          {displayImage(useImage("files/image/Hokaido/DSCF1275.JPG", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1556.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1823.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_2432.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1954.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1909.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1195.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1505.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1787.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1601.jpeg", s3))}
          {displayImage(useImage("files/image/Hokaido/IMG_1767.jpeg", s3))}
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravelNara({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="container">
        <div className="row" style={{ display: "flex", alignContent: "left",marginBottom: "10px", }}>
          <div className="ten columns">
            <h5>Nara　奈良</h5>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
          {displayImage(useImage("files/image/Nara/IMG_2169.jpeg", s3))}
          {displayImage(useImage("files/image/Nara/IMG_2219.jpeg", s3))}
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravelTokyo({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="container">
        <div className="row" style={{ display: "flex", alignContent: "left",marginBottom: "10px", }}>
          <div className="ten columns">
            <h5>Tokyo 東京</h5>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
          {displayImage(useImage("files/image/Tokyo/IMG_0969.jpeg", s3))}
          {displayImage(useImage("files/image/Tokyo/IMG_1071.jpeg", s3))}
          {displayImage(useImage("files/image/Tokyo/IMG_1102.jpeg", s3))}
          {displayImage(useImage("files/image/Tokyo/IMG_1144.jpeg", s3))}
          {displayImage(useImage("files/image/Tokyo/IMG_2956.jpeg", s3))}
          {displayImage(useImage("files/image/Tokyo/IMG_3034.jpeg", s3))}
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravelOsaka({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="container">
        <div className="row" style={{ display: "flex", alignContent: "left" ,marginBottom: "10px",}}>
          <div className="ten columns">
            <h5>Osaka 大阪</h5>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
          {displayImage(useImage("files/image/Osaka/IMG_2304.jpeg", s3))}
          {displayImage(useImage("files/image/Osaka/IMG_2637.jpeg", s3))}
          {displayImage(useImage("files/image/Osaka/IMG_2646.jpeg", s3))}
          {displayImage(useImage("files/image/Osaka/IMG_2014.jpeg", s3))}
          {displayImage(useImage("files/image/Osaka/IMG_2065.jpeg", s3))}
          {displayImage(useImage("files/image/Osaka/IMG_2029.jpeg", s3))}
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleGame({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="game container">
        <div className="row">
          <div className="three columns">
            <h4>Games</h4>
          </div>
        </div>
        <div className="row"></div>
      </div>
    );
  }

  function CollapsibleSports({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="badminton container">
        <div className="row">
          <div className="three columns">
            <h4>Badminton</h4>
          </div>
        </div>
        <div className="row">
          <p>I love Badmintin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="about">
      <div className="academicTitle container">
        <div className="row" style={{ textAlign: "center" }}>
          <h2>Academic</h2>
        </div>
      </div>
      <div className="dataScience container">
        <div className="row">
          <h4>Data Science</h4>
        </div>
        <div className="row">
          <div
            className="four columns"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={require("../files/image/WPIDS.png")}
              alt="Profile picture"
              className="picture"
              width="230px"
              height="230px"
            />
          </div>
          <div className="eight columns">
            <p>
              I am a <span class="bold">Data Science</span> student who recently
              graduated from Worcester Polytechnic Institute (WPI) in 2023. I
              have a strong passion for data science and plan to pursue a{" "}
              <span class="bold">
                master's degree in Analytics at the University of Southern
                California (USC)
              </span>{" "}
              starting from 2023. During my time at WPI, I gained a solid
              foundation in statistical analysis, machine learning, and data
              visualization through various courses and projects. I also
              developed proficiency in programming languages like Python and R,
              essential for data analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="computerScience container">
        <div className="row">
          <h4>Computer Science</h4>
        </div>
        <div className="row">
          <div
            className="four columns"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={require("../files/image/CS.png")}
              alt="Profile picture"
              className="picture"
              width="230px"
              height="230px"
            />
          </div>
          <div className="eight columns">
            <p>
              I also hold an{" "}
              <span className="bold">
                undergraduate degree in Computer Science
              </span>{" "}
              from Worcester Polytechnic Institute (WPI), which provides a
              strong foundation in programming languages and concepts. Through
              my studies, I gained proficiency in Java, C++, SQL, and other
              programming languages. These skills are invaluable in approaching
              data science projects from a technical standpoint. My background
              in computer science has sharpened my problem-solving abilities and
              logical thinking, crucial skills in data science.
            </p>
          </div>
        </div>
      </div>
      <div className="hobbyTitle container">
        <div className="row" style={{ textAlign: "center" }}>
          <h2>Hobbies</h2>
        </div>
      </div>
      <CollapsibleSki props={props}></CollapsibleSki>
      {/* <CollapsibleSports props={props}></CollapsibleSports>
      <CollapsibleGame props={props}></CollapsibleGame> */}
      <CollapsibleTravel props={props}></CollapsibleTravel>
    </div>
  );
};

export default About;
