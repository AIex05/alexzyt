import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const overviewData = [
  {
    subject: "Computer Science",
    A: 7,
    fullMark: 10,
    description:
      "With a degree in Computer Science, I possess expertise in algorithms and software engineering. As a software engineer, I excel in designing and developing efficient and reliable software solutions. Data science is my main focus, allowing me to approach programming challenges with a data-driven mindset and extract valuable insights from large datasets.",
  },
  {
    subject: "Data Sicence",
    A: 9,
    fullMark: 10,
    description:
      "Possessing an undergraduate degree in Data Science and actively pursuing a graduate degree at the University of Southern California (USC) in 2023, I have acquired a strong foundation in this field. With extensive experience in data science and a track record of successfully completing numerous business-related projects, I have honed my skills in analyzing complex data sets. My expertise enables me to extract valuable insights and make informed decisions, making me a valuable asset in any data-driven organization.",
  },
  {
    subject: "Languages",
    A: 8,
    fullMark: 10,
    description:
      "Proficient in Chinese, English, and Japanese, I possess strong communication skills in these languages. Fluent in both Chinese and English, I can effectively engage with individuals in professional settings. Additionally, I can converse comfortably in Japanese, allowing me to interact casually with others. My multilingual ability enhances my versatility and facilitates effective cross-cultural communication.",
  },
  {
    subject: "Communication",
    A: 7,
    fullMark: 10,
    description: "I am a outgoing person, I have lot of presentation experiences with porjects in classes, I am especially good at free question and answer part of the presentation",
  },
  {
    subject: "Creativity",
    A: 5,
    fullMark: 10,
    description: "As a designer of my own website, the asthestic aspect of the website explains everything",
  },
];

const dsData = [
  {
    subject: "Statistics",
    A: 7.5,
    fullMark: 10,
    description:
      "Proficient in statistical analysis with a solid academic background, including extensive coursework in statistics and probability. Demonstrated expertise through exceptional grades, achieving three A's and one B. Skilled in accurately analyzing and interpreting data, utilizing statistical models and methods to make informed decisions.",
  },
  {
    subject: "Machine Learning",
    A: 9,
    fullMark: 10,
    description: "With projects done in school related to Machine learning, including but not limited to predicting housing price and estimate housing price base on attributes of the house",
  },
  {
    subject: "Predictive Analytics",
    A: 9,
    fullMark: 10,
    description: "With a large project done with Angelo Gordon that do prediction for housing price and housing market analysis, this is done by using ARIMA model to predict housing price, and we have access to database provided by the company and we received a high compliment",
  },
  {
    subject: "Data Visualization",
    A: 7.5,
    fullMark: 10,
    description: "With experiences of presentations with power point, using Python and Power BI and other languages including JS.",
  },
  {
    subject: "Data Preparation",
    A: 6,
    fullMark: 10,
    description: "Although cleaned data is given for lots of cases, I still have enough training throw class projects",
  },
  {
    subject: "Natural Language Processing",
    A: 6,
    fullMark: 10,
    description: "As the first field approached, I have one big project related to NLP, I am intrested into the field.",
  },
];

const csData = [
  {
    subject: "Python",
    A: 9,
    fullMark: 10,
    description: "As a data science major, I mastered Python without a doubt I used python for all kinds of machine learning with pytorch and pandas and ...",
  },
  {
    subject: "C",
    A: 5,
    fullMark: 10,
    description: "Have one class related to C, I am not a master of C but I am able to use C to write simple programs and projects",
  },
  {
    subject: "Java",
    A: 8,
    fullMark: 10,
    description: "used java since 2020, started in class, but ",
  },
  {
    subject: "R",
    A: 6,
    fullMark: 10,
    description: "Used in various projects ",
  },
  {
    subject: "JS",
    A: 8,
    fullMark: 10,
    description: "Major language for web design, used in this personal webiste",
  },
  {
    subject: "SQL",
    A: 10,
    fullMark: 10,
    description: "Used a lot for basic data gathering and basic analysis for data",
  },
];

const languagesData = [
  {
    subject: "Chinese",
    A: 10,
    fullMark: 10,
    description:
      "Native Chinese speaker with exceptional fluency in both written and spoken Chinese. Possesses a profound understanding of Chinese culture, traditions, and history, enabling effective communication in a professional context while demonstrating sensitivity to cultural nuances.",
  },
  {
    subject: "Japanese",
    A: 7,
    fullMark: 10,
    description:
      "Obtained a commendable score of 129 on the Japanese Language Proficiency Test (JLPT) N2 in 2020. Continuously enhancing proficiency through immersive experiences, including residing in Japan for an extended period with a native Japanese friend. Capable of effectively communicating in Japanese, exhibiting fluency and adaptability to navigate professional environments in Japan with minimal language barriers.",
  },
  {
    subject: "English",
    A: 9,
    fullMark: 10,
    description:
      "Exceptionally skilled in the English language, acquired through rigorous academic pursuits in the United States. Proficient in both professional and casual communication, with the ability to confidently converse in any situation. Demonstrated language proficiency through an outstanding TOEFL score of 101, SAT score of 1480, and GRE score of 321. Possesses excellent verbal and written communication skills, ensuring effective engagement in diverse professional settings.",
  },
  {
    subject: "Cantonese",
    A: 4,
    fullMark: 10,
    description:
      "Familiar with Cantonese through exposure in the Guangdong region, allowing for basic conversational skills. Although not fluent, possesses the ability to engage in simple interactions and comprehend the local dialect.",
  },
];

const descriptionGenerator = (Data) =>
  Data.map((data) => (
    <ul>
      <li style={{ fontWeight: "900" }}>
        {data.subject}
        <ul>{data.description}</ul>
      </li>
    </ul>
  ));

export default class Skills extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <div className="container">
        <div
          className="row overviewTitle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Overview</h2>
        </div>
        <div className="row overviewChart">
          <div
            className="twelve columns"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadarChart
              cx={300}
              cy={250}
              outerRadius={200}
              width={600}
              height={500}
              data={overviewData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 10]}/>
              <Radar
                name="Alex"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </div>
        </div>
        <div className="row overviewDescription">
          {descriptionGenerator(overviewData)}
        </div>
        <div
          className="row dsTitle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Data Sicence</h2>
        </div>
        <div
          className="row dsChart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadarChart
            cx={400}
            cy={250}
            outerRadius={200}
            width={800}
            height={500}
            data={dsData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 10]}/>
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
        <div className="row dsDescription">{descriptionGenerator(dsData)}</div>
        <div
          className="row csTitle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Programming</h2>
        </div>
        <div
          className="row csChart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadarChart
            cx={250}
            cy={250}
            outerRadius={200}
            width={500}
            height={500}
            data={csData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 10]}/>
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
        <div className="row csTitle">{descriptionGenerator(csData)}</div>
        <div
          className="row languageTitle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Languages</h2>
        </div>
        <div
          className="row languageChart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={200}
            width={600}
            height={500}
            data={languagesData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 10]}/>
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
        <div className="row languageDescription">
          {descriptionGenerator(languagesData)}
        </div>
      </div>
    );
  }
}
