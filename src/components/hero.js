import "../css/hero.css";
import homeContent from "../data/home_content.json";

export default function Hero() {
  const { AllText, Socials } = homeContent;

  return (
    <section className="heroSection" id="hero">
      <div className="herotext">
        <p className="heroIntro">Hi, my name is</p>
        <h1 className="name neonText">
          <a
            href={Socials.LinkedIn || "#"}
            target="_blank"
            rel="noreferrer noopener"
          >
            &lt; Nishant Joshi /&gt;
          </a>
        </h1>
        <h2 className="built">I build things on the web.</h2>
        <p className="desc">
          {AllText.heroDescription}
          <span className="descKeyword">
            &nbsp;{AllText.heroDescriptionKeyword}
          </span>
          .
        </p>
        <a
          className="gitbutton"
          href={Socials.LinkedIn || "#"}
          target="_blank"
          rel="noreferrer noopener"
        >
          Check out my LinkedIn for more!
        </a>
      </div>
    </section>
  );
}
