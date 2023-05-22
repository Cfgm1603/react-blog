import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const path = window.location.pathname;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
      <img src="https://www.linkpicture.com/q/drop_3.png" style={{ width: '30px'}} onClick={toggleDropdown}/>
        {isOpen && (
        <div className="dropdown-container">
          <div className="dropdown-content">
            <CustomLink to="/bloglist">Bloglist</CustomLink>
            <CustomLink to="/favorites">Favorites</CustomLink>
            <CustomLink to="/watch">Watch later</CustomLink>
          </div>
        </div>
      )}
    </div>
    );
  };


  return (
    <nav className="navbar">
      <Link to="/" className="web-name">
        Critics Corner
      </Link>
      <div className="nav-center"></div>

      <div className="nav-right">
      {windowWidth > 400 ?
        <ul >
          <CustomLink to="/bloglist">Bloglist</CustomLink>
          <CustomLink to="/favorites">Favorites</CustomLink>
          <CustomLink to="/watch">Watch later</CustomLink>
        </ul> 
       : 

       <Dropdown/>
       }
        
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedpath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedpath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
}
