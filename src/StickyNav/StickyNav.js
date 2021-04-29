import { Link } from "react-scroll";

function StickyNav() {
  return (
    <nav className="stickyNav">
      <ul className="stickyUl">
        <li className="liNoBorder li">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            This is me
          </Link>
        </li>
        <li className="liNoBorder">
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="liNoBorder">
          <Link activeClass="active" to="resume" spy={true} smooth={true}>
            Resume
          </Link>
        </li>
        <li className="liBorder">
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
      <h1>Pontus Rådström</h1>
    </nav>
  );
}
export default StickyNav;
