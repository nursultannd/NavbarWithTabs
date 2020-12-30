import { createSlice } from "@reduxjs/toolkit";
import names from "../../assets/names";

const initialState = {
  value: 0,
  data: names[0].courseDetails,
  headers: [
    {
      path: "next",
      label: "Next",
      filter: true,
      style: { width: "9em" },
      visible: true,
    },
    {
      path: "trainer",
      label: "Trainer",
      filter: true,
      style: { width: "12em" },
      visible: false,
    },
    {
      path: "delivery",
      label: "Delivery",
      filter: true,
      style: { width: "6em" },
      visible: true,
    },
    {
      path: "duration",
      label: "Duration",
      filter: true,
      style: { width: "6em" },
      visible: true,
    },
    {
      path: "course",
      label: "Course",
      filter: true,
      style: { width: "9em" },
      visible: true,
    },
    {
      path: "description",
      label: "Description",
      filter: true,
      style: { width: "15em" },
      visible: true,
    },
    {
      path: "frequency",
      label: "Frequency",
      filter: true,
      style: { width: "15em" },
      visible: true,
    },
    {
      path: "last",
      label: "Last",
      filter: true,
      style: { width: "8em" },
      visible: true,
    },
    {
      path: "by",
      label: "By",
      filter: true,
      style: { width: "8em" },
      visible: true,
    },
  ],
  headersSettings: [
    {
      path: "next",
      label: "Next",
      filter: true,
      style: { width: "9em" },
      visible: true,
    },
    {
      path: "trainer",
      label: "Trainer",
      filter: true,
      style: { width: "12em" },
      visible: false,
    },
    {
      path: "delivery",
      label: "Delivery",
      filter: true,
      style: { width: "6em" },
      visible: true,
    },
    {
      path: "duration",
      label: "Duration",
      filter: true,
      style: { width: "6em" },
      visible: true,
    },
    {
      path: "course",
      label: "Course",
      filter: true,
      style: { width: "9em" },
      visible: true,
    },
    {
      path: "description",
      label: "Description",
      filter: true,
      style: { width: "15em" },
      visible: true,
    },
    {
      path: "frequency",
      label: "Frequency",
      filter: true,
      style: { width: "15em" },
      visible: true,
    },
    {
      path: "last",
      label: "Last",
      filter: true,
      style: { width: "8em" },
      visible: true,
    },
    {
      path: "by",
      label: "By",
      filter: true,
      style: { width: "8em" },
      visible: true,
    },
  ],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    headerChange: (records, action) => {
      const payload = action.payload;
      records.headersSettings[payload].visible = !records.headersSettings[
        payload
      ].visible;
    },
    onHeaderSave: (records) => {
      records.headers = records.headersSettings;
    },
    onHeaderCancel: (records) => {
      records.headersSettings = records.headers;
    },
    onDragAndDrop: (records, action) => {
      records.data = action.payload;
    },
  },
});

export const {
  headerChange,
  onHeaderSave,
  onHeaderCancel,
  onDragAndDrop,
} = recordsSlice.actions;
export default recordsSlice.reducer;
