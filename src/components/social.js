import "../css/social.css";
import homeContent from "../data/home_content.json";

export default function Social() {
  const { Email } = homeContent.Socials;

  return (
    <div className="lnk">
      <ul className="emaillist">
        <li className="last">
          <a className="emailatag" href={`mailto:${Email}`}>
            {Email}
          </a>
        </li>
        <li aria-hidden="true">――――――――――――――――――――――</li>
      </ul>
    </div>
  );
}
