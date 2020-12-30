import React, { FC } from "react";
import { CheckboxCheckedIcon, CheckboxIcon } from "../../assets/icons";

type CheckboxType = {
  checked: boolean;
  handleClick: any;
};

const Checkbox: FC<CheckboxType> = ({ checked, handleClick }) => {
  if (checked) {
    return <CheckboxCheckedIcon onClick={handleClick} />;
  }
  return <CheckboxIcon onClick={handleClick} />;
};

export default Checkbox;
