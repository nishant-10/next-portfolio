import "../css/socialfoot.css";
import homeContent from "../data/home_content.json";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./Icons";

export default function SocialFoot() {
  const { Socials } = homeContent;

  const links = [
    { label: "GitHub", href: Socials.GitHub, Icon: GithubIcon },
    { label: "Instagram", href: Socials.Instagram, Icon: InstagramIcon },
    { label: "LinkedIn", href: Socials.LinkedIn, Icon: LinkedinIcon },
  ];

  return (
    <footer>
      <div className="socialFootSection">
        <ul className="socialFootUl">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="socialFootIcon"
                aria-label={label}
              >
                <Icon className="socialFootIconCommon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="socialFootText">
        <div>
          Made by Nishant with <span className="heart">❤</span>
        </div>
        <div>Last updated on February 2025</div>
      </div>
    </footer>
  );
}
