import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        My App
      </Link>
      <Link to="/login" className="nav-link">
        Log In
      </Link>
    </nav>
  );
};

export default Navbar;