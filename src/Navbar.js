import { Link, useLocation } from "react-router-dom";
import './NavStyle.css';

const Navbar = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <ul>
      <li>
        <Link to="/">
          <button className={`button ${activeLink === '/' ? 'active' : ''}`}>
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button className={`button ${activeLink === '/about' ? 'active' : ''}`}>
            About
          </button>
        </Link>
      </li>
      <li>
        <Link to="/careers">
          <button className={`button ${activeLink === '/careers' ? 'active' : ''}`}>
            Careers
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;