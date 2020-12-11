import React, { useState, useEffect } from "react";
import "./Tabs.css";
import { ReactComponent as NewtabIcon } from "./newtab.svg";
import { ReactComponent as CloseIcon } from "./close.svg";

import {useHistory} from "react-router-dom";

const Tabs = ({
  //props:
  active,
  onTabSwitch,
  onTabClose,
  onTabAdd,
  showAdd,
  children,
changeNeededIndx, setChangeNeededIndx
}) => {
  const [tabTotal, setTabTotal] = useState(0);
  const [singleTabWidth, setSingleTabWidth] = useState(0);
  const history = useHistory();

  useEffect(
    () => {
      if (changeNeededIndx !== -1) {
        switchTab(changeNeededIndx); 
        setChangeNeededIndx(-1)
      }
    }
    , [changeNeededIndx]
  )
  useEffect(() => {
    setTabTotal(children.length);
    (tabTotal===1)? setSingleTabWidth(50) : setSingleTabWidth(98 / tabTotal);
  }, [tabTotal, children.length]);

  const switchTab = (index) => {
    onTabSwitch(index);
  };


  const handleClose = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    onTabClose(index);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onTabAdd(`/favorites`, "New Tab");
    if (tabTotal<5) history.push(`/favorites`);
  };

  const getLeftByIndex = (index) => {
    return 1 + singleTabWidth * index;
  };



  return (
    <div className="t-a-b">
      <div
        className={
          "tab-wrapper" + (showAdd ? " with-add" : "")
        } 
      >
        {children.map((tab, index) => {
          let style = {};
          let position = index;

          style["zIndex"] = tabTotal - position;
          style["left"] = getLeftByIndex(position) + "%";
          style["width"] = singleTabWidth + "%";

          return (
            <div
              key={index}
              className={"tab-button" + (active === index ? " active" : "")}
              style={style}
              onClick={() => switchTab(index)}
            >
              <div
                className="tab"
              ></div>
              <div
                className={"text" + (tab.props.showClose ? " with-close" : "")}
              >
                {tab.props.title}
              

              </div>
              {tab.props.showClose ? (
                <div
                  className="close"
                >
                  <CloseIcon onClick={(e) => handleClose(index, e)}/>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {showAdd ? (
        <div className="add-wrapper" style={(tabTotal===1)? {left: "50%"} : {}}>
          <NewtabIcon className="newtab" onClick={ (e) => handleAdd(e)} />
        </div>
      ) : null}


    </div>
  );
};


const Tab = ({ children }) => {
  return <div>{children}</div>;
};


export default Tabs;
export { Tab };

