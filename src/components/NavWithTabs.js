import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Menu from "./Menu";
import FavoritesDropdown from "./FavoritesDropdown";
import { Link, useHistory } from "react-router-dom";
import ModuleNavigations from "./ModuleNav/ModuleNavigations";
import Tabs, { Tab } from "./Tabs/Tabs";

import { ReactComponent as NotifIcon } from "./icons/notifications.svg";
import { ReactComponent as HelpIcon } from "./icons/help.svg";
import { ReactComponent as PmIcon } from "./icons/pm.svg";

export default function NavWithTabs({ tabsList, setTabsList, changeNeededIndx, setChangeNeededIndx }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const history = useHistory();

  const handleModule = (bool) => {
    setIsModuleOpen(bool);
  };

  const handleTabSwitch = (active) => {
    setActiveTab(active);

    tabsList.forEach((item, index) => {
      if (index === active) {
        history.push(item.path);
        console.log(active);
      }
    });
  };

  const handleNoActiveTab = () =>
  {
    setActiveTab(-1);
  }

  const handleTabClose = (index) => {
    if (tabsList.length === 1) {
      handleModule(false);
      (activeTab===-1)? history.push(`#`) : history.push(`/`);
    } else if (tabsList.length > 1) {
      if (activeTab > index) setActiveTab(activeTab - 1);

      if (activeTab === index) {
        if (activeTab + 1 !== tabsList.length) {
          //setActiveTab(activeTab);
          history.push(tabsList[activeTab + 1].path);
        } else {
          setActiveTab(activeTab - 1);
          history.push(tabsList[activeTab - 1].path);
        }
      }
    }
    setTabsList((tabsList) => tabsList.filter((el) => el !== tabsList[index]));
  };
      

  const handleTabAdd = (newPath, newTitle) => {
    const indx = tabsList.findIndex( tab => tab.path === newPath ) //maybe need to make an iterator
    if (tabsList.length < 5) {
      if (indx === -1)
      {  
        setTabsList((tabsList) => [
          ...tabsList,
          {
            title: newTitle,
            path: newPath,
          },
        ]);
        setActiveTab(tabsList.length); 
        history.push(newPath);
      } 
      else 
      {
        handleTabSwitch(indx)
        //window.alert("The tab is already open")
        console.log("The tab is already open")
      }
    }
      else if (indx !== -1) 
      {
        handleTabSwitch(indx)
        console.log("The tab is already open")
      }
      else console.log(
        "Reached max number of tabs. Please close some tabs to open more."
      );
  };


          

  return (
    <header>
      <div className="container">
        <div className="nav-btn">
          <div className="nav-links">
            <Menu handleTabAdd={handleTabAdd} handleModule={handleModule} />
          </div>

          <div className="nav-links">
            <ul>
              <FavoritesDropdown
                handleTabAdd={handleTabAdd}
                handleModule={handleModule}
              />

              <li className="nav-item">
                <Link to="/notifications-and-workflow" onClick={handleNoActiveTab}>
                  <NotifIcon />
                </Link>
              </li>

              <li className="nav-item" style={{ pointerEvents: "none" }}>
                <Link to="/project-management">
                  <PmIcon />
                </Link>
              </li>

              <li className="nav-item" style={{ pointerEvents: "none" }}>
                <Link to="Help">
                  <HelpIcon />
                </Link>
              </li>
            </ul>
          </div>

          {isModuleOpen && (
            <>
              <ModuleNavigations />

              <div className="nav-links tabs">
                <Tabs
                  active={activeTab}
                  onTabSwitch={handleTabSwitch}
                  onTabClose={handleTabClose}
                  onTabAdd={handleTabAdd}
                  showAdd={isModuleOpen}
                  changeNeededIndx={changeNeededIndx} setChangeNeededIndx={setChangeNeededIndx}
                >
                  {tabsList.map((tab, index) => {
                    return (
                      <Tab
                        key={index}
                        title={tab.title}
                        path={tab.path}
                        showClose={true}
                      ></Tab>
                    );
                  })}
                </Tabs>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
