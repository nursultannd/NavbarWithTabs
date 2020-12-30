import { combineReducers } from "redux";
import profiles from "./trainingRecords/profiles";
import counter from "./trainingRecords/counter";
import records from "./records/records";
import sales from "./sales/sales";

export default combineReducers({
  profiles,
  counter,
  records,
  sales,
});
