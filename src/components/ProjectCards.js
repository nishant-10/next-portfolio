"use client";
import { useState } from "react";
import "../css/projectcards.css";
import Cards from "./Cards";
import homeContent from "../data/home_content.json";

const STEP = 3;

export default function ProjectCards() {
  const projects = homeContent.projects ?? [];
  const [visible, setVisible] = useState(STEP);

  const allShown = visible >= projects.length;

  const toggle = () => {
    setVisible(allShown ? STEP : Math.min(visible + STEP, projects.length));
  };

  return (
    <section className="cardArea" id="projects">
      <h2 className="cah1 cardAreaTitle">02. Noteworthy Projects</h2>
      <p className="cah1 cardAreaSubTitle">Personal &amp; Academic</p>
      <p className="cah1 cardAreaInfo">
        Click a card for a demo, or the GitHub icon for the repository.
      </p>
      <div className="cards">
        <Cards projects={projects.slice(0, visible)} />
      </div>
      {projects.length > STEP && (
        <div className="showMoreButtonArea">
          <button
            type="button"
            className="showMoreButt"
            onClick={toggle}
            aria-expanded={allShown}
          >
            {allShown ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      )}
    </section>
  );
}
