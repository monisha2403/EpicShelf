import { useState } from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ ITEMS, setActivePageIndex }) {
    const [active, setActive] = useState(0);

    function handleClick(index) {
        setActive(index);
        setActivePageIndex(index);
    }

    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                {
                    ITEMS.map((val, idx) => {
                        return (
                            <Link
                                key={idx}
                                to={val.text.toLowerCase()}
                                className={"item " + (idx === active ? " active" : "")}
                                onClick={() => handleClick(idx)}
                            >
                                <div className="icon">{val.icon}</div>
                                <div className="text">{val.text}</div>
                            </Link>
                        );
                    })
                }
            </div>
        </div >
    );
}

export default NavBar;