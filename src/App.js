import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavWithTabs from "./components/NavWithTabs";

import Favorites from "./components/pages/Favorites";
import Notifications from "./components/pages/Notifications";
import WO from "./components/pages/WO";
import WMS from "./components/pages/WMS";
import MOC from "./components/pages/MOC";
import MrpPO from "./components/pages/MrpPO";
import SupplierContacts from "./components/pages/SupplierContacts";



function App() {
  const [tabsList, setTabsList] = useState([]); 
  const [changeNeededIndx, setChangeNeededIndx] = useState(-1)
  // ChangeNeeded: -1 = not needed, 0-4 = indx to change

  const handleTabsList = (tab) =>
  { setTabsList(tab)  }


  return (
    <>
      <Router>
        <NavWithTabs tabsList={tabsList} setTabsList={handleTabsList} 
         changeNeededIndx={changeNeededIndx} setChangeNeededIndx={setChangeNeededIndx} />

        <Switch>
          <Route path="/favorites">
            <Favorites tabsList={tabsList} setTabsList={handleTabsList} 
            setChangeNeededIndx={setChangeNeededIndx} />
            </Route>
          <Route path="/notifications-and-workflow">
            <Notifications />
          </Route>
          
          {/* Modules: */}
          <Route path="/wms">
            <WMS />
          </Route>

          <Route path="/mrp-po">
          <MrpPO />
          </Route>

          <Route path="/supplier-contacts" >
          <SupplierContacts />
          </Route>

          <Route path="/wo">  
          <WO />
          </Route>

          <Route path="/moc">
          <MOC />
          </Route>

        </Switch>
      </Router>
    </>
  );
}
 
export default App;
