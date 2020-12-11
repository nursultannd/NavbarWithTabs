import { ReactComponent as SearchIcon } from "../icons/search.svg";

import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../Navbar.css";


export default function Options() {

    const [searchDropdown, setSearchDropdown] = useState(false);
    const showSearch = () => setSearchDropdown(!searchDropdown);
  

  return (

    <>
    <li
            className={
              searchDropdown ? "nav-item search active" : "nav-item search"
            }
            /* style={{ borderLeft: "1px solid white" }} */
            onClick={showSearch}
          >
            {/* <li className="nav-item search" style={{borderLeft: "1px solid white"}}> */}
            <Link style={{ padding: "10px" }}>
              <SearchIcon />
            </Link>
          </li>
          <div className={searchDropdown ? "srch open" : "srch"}>
            <label>
              <input type="text"></input>
              <button>
                {" "}
                <SearchIcon />{" "}
              </button>
            </label>
          </div>
          
    </>
      
  );
}


