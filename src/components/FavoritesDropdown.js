import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as FavIcon } from "./icons/favorites.svg";
import { FavoritesData } from "./FavoritesData";

export default function FavoritesDropdown({handleTabAdd, handleModule}) {

  const [isFavOpen, setIsFavOpen] = useState (false);
  const closeFav = (path, title) => {
    setIsFavOpen (false)
    handleTabAdd(path, title)
    handleModule(true)
  }

  return (
    <li className="nav-item">
      <FavIcon className="fav-icon" 
        onMouseEnter={() => {setIsFavOpen (true)}}
      />
      <div className="fav-drpdwn" 
      style={isFavOpen? {} : {opacity: "0", pointerEvents: "none"}}>
        <ul>
          {FavoritesData.map((item) => {
            return (
              <>
                <li
                  className="fav-drpdwn-item"
                  key={item.path}
                  onClick={() => {closeFav(item.path, item.title)} }
                >
                  <Link to="#"> {item.title} </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
