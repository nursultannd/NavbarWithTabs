import React from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";
import { FavoritesData } from "../FavoritesData";

export default function Favorites({ tabsList, setTabsList, setChangeNeededIndx}) {
  const changeTabsList = (newPath, newTitle) => {
    let arr = tabsList;
    let indx= arr.findIndex((tab) => tab.path === newPath)
    let newTabsIndex = arr.findIndex((tab) => tab.path === "/favorites")
    if (indx === -1) {
      arr.splice(newTabsIndex, 1,
        {
          title: newTitle,
          path: newPath,
        }
      );
      setTabsList(arr);
      setChangeNeededIndx(newTabsIndex);
      console.log("TabsListchanged");
    } else {
      setChangeNeededIndx(indx);
      console.log("Tab is already open");
    }
  };

  return (
    <div className="content-container">
      <h3 style={{ padding: "10px 0 0 10px" }}>Favorites List</h3>
      <div className="fav-list">
        <ul>
          {FavoritesData.map((item) => {
            return (
              <>
                <li
                  key={item.path}
                  onClick={() => changeTabsList(item.path, item.title)}
                >
                  <Link to="#" /* {item.path} */> {item.title} </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/////solve:
/* 
    - switching tab when opening the same module

*/
