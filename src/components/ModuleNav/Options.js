import React from "react";
import {Link} from 'react-router-dom';

export default function Options() {

    const OptionsList = [
        {
          path: "/reports",
          title: "Reports",
        },
        {
          path: "/toolbox",
          title: "Toolbox",
        },
        {
          path: "/notifications",
          title: "Notifications",
        },
        {
          path: "/udf",
          title: "UDF",
        },
        {
          path: "/database-table",
          title: "Database Table",
        },
        {
          path: "/settings",
          title: "Settings",
        },
      ];

  return (
        <ul className="options">
          {OptionsList.map((item) => {
            return (
              <li key={'options'+item.path} className="options-item">
                <Link to="#"/* {item.path} */> {item.title} </Link>
              </li>
            );
          })}
        </ul>
      
  );
}
