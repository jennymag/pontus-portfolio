import { useHistory } from "react-router";
import projectsData from "./projectData";
import hon from "../images/Honolulu.jpg";

function Projects() {
  let history = useHistory();

  function handleClick(title) {
    return function () {
      history.push(`/${title}`);
    };
  }
  return (
    <section id="projects">
      <h1 className="projectH1">
        <span className="yellowColor">Projects</span> I’ve done at Stockholms
        Tekniska Institut
      </h1>

      <div className="case">
        {projectsData.map((project) => (
          <div className="projectCard" key={project.id}>
            <div className="roundShape"></div>
            <div className="project">
              <h2 className="title">{project.title}</h2>
              <p className="brief">{project.brief}</p>
              {project.isFinished ? (
                <button
                  className="caseBtn"
                  onClick={handleClick(project.title)}
                >
                  case study
                </button>
              ) : (
                <p className="comingSoon">coming soon</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
