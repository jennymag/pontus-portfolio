import { useHistory } from "react-router";
/* import { Link } from "react-scroll"; */
import { HashLink as Link } from "react-router-hash-link";

function StickyNav() {
  return (
    <nav className="stickyNav">
      <ul className="stickyUl">
        <li className="liNoBorder li">
          <Link smooth to="/">
            This is me
          </Link>
        </li>
        <li className="liNoBorder">
          <Link smooth to="/#projects">
            Projects
          </Link>
        </li>
        <li className="liNoBorder">
          <Link smooth to="/#resume">
            Resume
          </Link>
        </li>
        <li className="liBorder">
          <Link smooth to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
      <h1>Pontus Rådström</h1>
    </nav>
  );
}
export default StickyNav;
