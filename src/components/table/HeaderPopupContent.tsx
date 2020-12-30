import React from "react";
import Checkbox from "./Checkbox";

const HeaderPopupContent = ({ props, handleClose }) => {
  const { data, onSave, onCancel, onChange } = props;
  const getstyles = () => {
    const len = data.length;
    const num = (len - (len % 5)) / 5 + 1;
    return { gridTemplateColumns: `repeat(${num}, 1fr)` };
  };

  return (
    <div className="HeaderPopup">
      <span className="HeaderText">
        Select columns that you want to represent in table
      </span>
      <div className="HeaderPopupContent" style={getstyles()}>
        {data.map((header, index) => (
          <div
            key={header.path}
            className="HeaderContainer"
            onClick={() => onChange(index)}
          >
            <Checkbox
              checked={header.visible}
              handleClick={() => {
                return;
              }}
            />
            <label className="text">{header.label}</label>
          </div>
        ))}
      </div>
      <div className="HeaderPopupFooter">
        <span
          className="CancelButton"
          onClick={() => {
            onCancel();
            handleClose();
          }}
        >
          Cancel
        </span>
        <span
          className="SaveButton"
          onClick={() => {
            onSave();
            handleClose();
          }}
        >
          Save
        </span>
      </div>
    </div>
  );
};

export default HeaderPopupContent;
