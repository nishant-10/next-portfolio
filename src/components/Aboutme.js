import Image from "next/image";
import "../css/aboutme.css";
import homeContent from "../data/home_content.json";

export default function Aboutme() {
  const { AllText } = homeContent;

  return (
    <section className="aboutContainer" id="about">
      <h2 className="aboutTitle">
        <span className="aboutTitleNumber">01. </span>
        <span className="aboutTitleText">About Me</span>
        <span className="aboutLine" aria-hidden="true">
          ――――――――――――――――――――――
        </span>
      </h2>
      <div className="aboutBody">
        <div className="aboutGrid">
          <div className="aboutContent">
            <p className="aboutPara">{AllText.AboutParaOne}</p>
            <p className="aboutPara">{AllText.AboutParaTwo}</p>
            <p className="aboutPara">{AllText.AboutParaThree}</p>
            <p className="aboutPara">
              Here are a few technologies I&rsquo;ve been working with recently:
            </p>
            <ul className="aboutSkillul">
              {AllText.AboutSkills.map((item) => (
                <li className="skillLi" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="aboutPhoto">
            <Image
              className="myimage"
              src="/compress3.jpg"
              alt="Nishant Joshi"
              width={250}
              height={250}
            />
            <div className="afterSquare" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
