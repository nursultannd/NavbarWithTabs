import React, { useState, useEffect } from "react";
import { XButtonIcon } from "../../assets/icons";
import "./Popup.scss";

const Popup = ({ open, close, position, content, name }) => {
  const [classes, setClasses] = useState({
    box: "box",
    overlay: "overlay",
  });

  useEffect(() => {
    if (!open) {
      setClasses({
        box: "box",
        overlay: "overlay",
      });
      return;
    }
    setClasses({
      box: "box active",
      overlay: "overlay active",
    });
  }, [open]);

  const handleClose = () => {
    close();
  };

  return (
    <div className="Popup">
      <div className={classes.box} style={{ position: position }}>
        <div className="header">
          <span className="text">{name}</span>
          <XButtonIcon
            className="x-button"
            onClick={handleClose}
            height="1.2em"
            width="1.2em"
          />
        </div>
        <div className="content">{content}</div>
      </div>
      <div
        className={classes.overlay}
        style={{ position: position }}
        // onClick={handleClose}
      ></div>
    </div>
  );
};

export default Popup;
