import "../css/social2.css";
import homeContent from "../data/home_content.json";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./Icons";

export default function SocialTwo() {
  const { Socials } = homeContent;

  const links = [
    { label: "GitHub", href: Socials.GitHub, Icon: GithubIcon },
    { label: "Instagram", href: Socials.Instagram, Icon: InstagramIcon },
    { label: "LinkedIn", href: Socials.LinkedIn, Icon: LinkedinIcon },
  ];

  return (
    <div className="lnk2">
      <ul className="emaillist2">
        <li aria-hidden="true">――――――――――――――――――――――</li>
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="socioicon"
              aria-label={label}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
