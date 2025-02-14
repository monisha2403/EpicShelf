import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ ITEMS, setActivePageIndex }) {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        {ITEMS.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="item"
            onClick={() => setActivePageIndex(index)}
          >
            {item.icon} {item.text}
          </Link>
        ))}
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <Link to="/categories/horror">Horror</Link>
            <Link to="/categories/romantic">Romantic</Link>
            <Link to="/categories/action">Action</Link>
            <Link to="/categories/kids">Kids</Link>
            <Link to="/categories/classic">Classic</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;