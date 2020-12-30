import React from "react";
import Table from "../table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  headerChange,
  onHeaderCancel,
  onHeaderSave,
  onDragAndDrop,
} from "../../store/sales/sales";

const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  return (
    <div className="Sales" style={{ position: "relative" }}>
      <Table
        data={sales.data}
        headers={sales.headers}
        onDragAndDrop={(data) => dispatch(onDragAndDrop(data))}
        renderOpenUp
        name="Sales Orders"
        headerSettings={{
          data: sales.headersSettings,
          onChange: (header) => {
            dispatch(headerChange(header));
          },
          onSave: () => {
            dispatch(onHeaderSave());
          },
          onCancel: () => {
            dispatch(onHeaderCancel());
          },
        }}
      />
    </div>
  );
};

export default Sales;
