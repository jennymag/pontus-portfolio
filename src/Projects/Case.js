import { useParams, useHistory } from "react-router";
import projectData from "./projectData";

function Case() {
  const { title } = useParams();
  let history = useHistory();
  const brief = history.location.state.brief;

  return (
    <section id="projectProfile">
      <div className="projectIntro">
        <h1 className="profileH1">{title}</h1>
        <p className="profileP">{brief}</p>
      </div>
      {projectData.map((obj) =>
        obj.categories.map((category) => (
          <li className="profile">
            <h2 className="profileH2">{category.title}</h2>
            <p className="profileP">{category.text}</p>
          </li>
        ))
      )}
    </section>
  );
}
export default Case;
