import React from "react";
import { FilterIcon, ReorderIcon } from "../../assets/icons";

const TableHeader = ({ header }) => {
  return (
    <div className="Header">
      <div className="Cell" style={{ width: "1em" }}>
        <div className="Content">
          <ReorderIcon
            width=".8em"
            height=".8em"
            color="#f0f0f0"
            style={{ visibility: "hidden" }}
          />
        </div>
      </div>
      {header.map(
        (item) =>
          item.visible && (
            <div className="Cell" style={item.style} key={item.path}>
              <div className="Content">
                {item.label && <span className="Text">{item.label}</span>}
                {item.labelComponent && item.labelComponent()}
                {item.filter && <FilterIcon width=".8em" height=".8em" />}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TableHeader;
