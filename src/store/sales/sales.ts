import { createSlice } from "@reduxjs/toolkit";
const data = require("./sales.json");

const initialState = {
  data: data.SalesOrders,
  headers: [
    {
      path: "SalesOrderNumber",
      label: "Sales Order Number",
      filter: true,
      style: { width: "12em" },
      visible: true,
    },
    {
      path: "CustomerNumber",
      label: "Customer Number",
      filter: true,
      style: { width: "11em" },
      visible: true,
    },
    {
      path: "OrderDate",
      label: "Order Date",
      filter: true,
      style: { width: "12em" },
      visible: true,
    },
    {
      path: "PurchaseOrderNumber",
      label: "Purchase Order Number",
      filter: true,
      style: { width: "13em" },
      visible: true,
    },
  ],
  headersSettings: [
    {
      path: "SalesOrderNumber",
      label: "Sales Order Number",
      filter: true,
      style: { width: "12em" },
      visible: true,
    },
    {
      path: "CustomerNumber",
      label: "Customer Number",
      filter: true,
      style: { width: "11em" },
      visible: true,
    },
    {
      path: "OrderDate",
      label: "Order Date",
      filter: true,
      style: { width: "12em" },
      visible: true,
    },
    {
      path: "PurchaseOrderNumber",
      label: "Purchase Order Number",
      filter: true,
      style: { width: "13em" },
      visible: true,
    },
  ],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    headerChange: (sales, action) => {
      const payload = action.payload;
      sales.headersSettings[payload].visible = !sales.headersSettings[payload]
        .visible;
    },
    onHeaderSave: (sales) => {
      sales.headers = sales.headersSettings;
    },
    onHeaderCancel: (sales) => {
      sales.headersSettings = sales.headers;
    },
    onDragAndDrop: (sales, action) => {
      sales.data = action.payload;
    },
  },
});

export const {
  headerChange,
  onHeaderSave,
  onHeaderCancel,
  onDragAndDrop,
} = salesSlice.actions;
export default salesSlice.reducer;
