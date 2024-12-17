import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(filteredProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`${
              active === index ? "active-project" : ""
            } project__item`}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="project__container container grid">
        {projects.map((project) => (
          <ProjectItems key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
