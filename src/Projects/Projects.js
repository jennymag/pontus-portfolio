import { useHistory } from "react-router";
import projectsData from "./projectData";

function Projects() {
  let history = useHistory();

  function handleClick(title) {
    return function () {
      history.push(`/${title}`);
    };
  }
  return (
    <section id="projects">
      <h1>Projects I’ve done at Stockholms Tekniska Institut</h1>
      {projectsData.map((project) => (
        <div key={project.id}>
          <div>{project.img}</div>
          <h2>{project.title}</h2>
          <p>{project.brief}</p>
          {project.isFinished ? (
            <button className="caseBtn" onClick={handleClick(project.title)}>
              case study
            </button>
          ) : (
            <p className="comingSoon">coming soon</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
