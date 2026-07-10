import "../css/sayhello.css";
import homeContent from "../data/home_content.json";

export default function SayHello() {
  const { Socials } = homeContent;

  return (
    <section className="sayHelloSection" id="contact">
      <h2 className="sayHelloTitleArea">
        <span className="sayHelloPara sayHelloTitleNumber">03. </span>
        <span className="sayHelloPara sayHelloTitle">What&rsquo;s Next?</span>
      </h2>
      <div className="sayHelloContent">
        <p className="sayHelloContentTitle">Get In Touch</p>
        <p className="sayHelloContentPara">Hit me up on my socials!</p>
        <a
          className="sayHelloContentButton"
          href={Socials.LinkedIn}
          target="_blank"
          rel="noreferrer noopener"
        >
          Say Hello!
        </a>
      </div>
    </section>
  );
}
