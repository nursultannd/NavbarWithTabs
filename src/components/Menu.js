import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ModulesData } from "./ModulesData";

import { ReactComponent as MenuIcon } from "./icons/menuIcon.svg";
import { ReactComponent as Exit } from "./icons/exit.svg";

export default function Menu({ handleTabAdd, handleModule }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = (path, title) => {
    setIsMenuOpen(false);
    handleTabAdd(path, title);
    handleModule(true);
  };

  return (
    <ul>
      <li className="nav-item">
        <MenuIcon
          className="logo-container"
          onMouseEnter={() => {
            setIsMenuOpen(true);
          }}
        />

        <div className="dropdown">
          <ul>
            {ModulesData.map((item) => {
              return (
                <>
                  <li key={item.key} className="dropdown-item">
                    <Link to={item.path}>{item.title}</Link>
                    <div
                      className="dropdown second"
                      style={
                        isMenuOpen
                          ? {}
                          : { opacity: "0", pointerEvents: "none" }
                      }
                    >
                      <ul>
                        {item.submodule.map((subm) =>
                          subm.title === "Sales" ? (
                            <li
                              key={subm.key}
                              className="dropdown-item"
                              onClick={() => closeMenu(subm.path, subm.title)}
                            >
                              <Link to="/sales" /* {subm.path} */>
                                {subm.title}
                              </Link>
                            </li>
                          ) : (
                            <li
                              key={subm.key}
                              className="dropdown-item"
                              onClick={() => closeMenu(subm.path, subm.title)}
                            >
                              <Link to="#" /* {subm.path} */>{subm.title}</Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </li>
                </>
              );
            })}
            <li key="logout" className="dropdown-item">
              <Link to="/login">
                Log Out <Exit />
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
