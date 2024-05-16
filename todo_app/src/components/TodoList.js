import React from "react";

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}

      <span className="icons">
        <button
          className="delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
}

export default Todolist;
