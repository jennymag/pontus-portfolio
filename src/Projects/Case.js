import { useParams, useHistory } from "react-router";
import projectData from "./projectData";

function Case() {
  const { title } = useParams();
  let history = useHistory();
  const brief = history.location.state.brief;

  return (
    <section id="caseProfile">
      <h1>{title}</h1>
      <p>{brief}</p>
      {projectData.map((obj) => (
        <ul>
          <li>
            {obj.aboutProject.map((category) => ...)}
            </li>
        </ul>
      ))}
    </section>
  );
}

export default Case;
