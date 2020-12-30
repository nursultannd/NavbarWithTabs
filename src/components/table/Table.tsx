import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./Table.scss";
import { SettingsIcon } from "../../assets/icons";
import Popup from "../popup/Popup";
import HeaderPopupContent from "./HeaderPopupContent";

const Table = ({
  headers,
  data,
  name,
  renderOpenUp,
  headerSettings,
  onDragAndDrop,
}) => {
  const [isPopUp, SetIsPopUp] = useState(false);
  const handleColumnDelete = () => {
    SetIsPopUp(true);
  };
  const handleClose = () => {
    SetIsPopUp(false);
    headerSettings.onCancel();
  };

  return (
    <div className="Table">
      <Popup
        name="Table Customization"
        content={
          <HeaderPopupContent
            props={headerSettings}
            handleClose={handleClose}
          />
        }
        open={isPopUp}
        close={handleClose}
        position="absolute"
      />
      <div className="Name">
        <span>{name}</span>
        <div className="containerIcons">
          <SettingsIcon
            height="1.5em"
            width="1.5em"
            onClick={handleColumnDelete}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <TableHeader header={headers} />

      <TableBody
        data={data}
        header={headers}
        renderOpenUp={renderOpenUp}
        tableName={name}
        onDragAndDrop={onDragAndDrop}
      />
    </div>
  );
};

export default Table;
