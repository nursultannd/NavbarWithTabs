import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as DotsIcon } from "../icons/option-dots.svg";
import { ReactComponent as HistoryIcon } from "../icons/refresh-history.svg";
import { ReactComponent as AddIcon } from "../icons/add.svg";

import "../Navbar.css";
import Options from "./Options";
import History from "./History";
import Timer from "./Timer";
import Search from "./Search";

export default function ModuleNavigations() {

  return (
    <>
      <div className="nav-links">
        <ul className="right">

          <Search />
          <li className="nav-item">
            <Link style={{ padding: "10px" }}>
              <AddIcon />
            </Link>
          </li>
        
          <li className="nav-item" >
            <Link to="#">
              <Timer />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#">
              <HistoryIcon />
            </Link>
            <History />
          </li>
          <li className="nav-item">
            <Link to="#">
              <DotsIcon />
            </Link>
            <Options />
          </li>
        </ul>
      </div>

    </>
  );
}

