import "../css/cards.css";
import { FolderIcon, GithubIcon } from "./Icons";

export default function Cards({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <article className="singleCard" key={project.id}>
          <div className="cardTop">
            <FolderIcon className="cardicon feather-folder" />
            <a
              href={project.GitLink}
              target="_blank"
              rel="noreferrer noopener"
              className="projectGitLink"
              aria-label={`${project.Title} — GitHub repository`}
            >
              <GithubIcon className="cardicon feather-github" />
            </a>
          </div>
          <a
            className="cardContent"
            href={project.DemoLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3 className="cardp projectTitle">{project.Title}</h3>
            <p className="cardp projectSubtitle">{project.Description}</p>
          </a>
          <ul className="cardTags">
            {project.Tags.map((tag) => (
              <li className="projectTag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
