import React, { useState } from "react";
import * as _ from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AddIcon, DeleteIcon, EditIcon, ReorderIcon } from "../../assets/icons";

const TableBody = ({
  data,
  header,
  renderOpenUp,
  tableName,
  onDragAndDrop,
}) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const handleDoubleClick = (item) => {
    if (selected && item._id === selected._id) {
      setSelected(null);
      setDisabled(false);
    } else {
      setSelected(item);
      setDisabled(true);
    }
  };
  let i = 12321;
  const [datas, setDatas] = useState(data);
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(datas);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onDragAndDrop(items);
  };

  return header.length === 0 ? null : (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={tableName}>
        {(provided) => (
          <div
            className="Body"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map((item, index) => (
              <React.Fragment key={item._id}>
                <Draggable
                  draggableId={item._id.toString()}
                  index={index}
                  isDragDisabled={disabled}
                >
                  {(provided) => (
                    <div
                      className="Row"
                      onClick={() => handleDoubleClick(item)}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <div className="Reorder" {...provided.dragHandleProps}>
                        <ReorderIcon width=".8em" height=".8em" />
                      </div>
                      {header.map(
                        (head) =>
                          head.visible && (
                            <div
                              className="Cell"
                              style={head.style}
                              key={head.path || i++}
                            >
                              {renderCell(item, head)}
                            </div>
                          )
                      )}
                    </div>
                  )}
                </Draggable>
                {selected && selected._id === item._id && (
                  <div className="OpenUp">
                    <AddIcon width="1.2em" height="1.2em" />
                    <EditIcon width="1.2em" height="1.2em" />
                    <DeleteIcon width="1.2em" height="1.2em" />
                    {/* {renderOpenUp && renderOpenUp(selected)} */}
                  </div>
                )}
              </React.Fragment>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TableBody;
