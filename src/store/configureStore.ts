import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./sagas/logger";

export default function store() {
  return configureStore({ reducer, middleware: [logger] });
}
