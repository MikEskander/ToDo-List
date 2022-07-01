import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClickDelete() {
    props.onDelete(props.id);
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  function handleClickComplete() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="note">
      <h2 style={{ textDecoration: isDone ? "line-through" : null }}>
        {props.title}
      </h2>
      <p style={{ textDecoration: isDone ? "line-through" : null }}>
        {props.content}
      </p>
      <button className="complete-Buttom" onClick={handleClickComplete}>
        ✔
      </button>
      <button className="delete-Buttom" onClick={handleClickDelete}>
        <strong>X</strong>
      </button>
    </div>
  );
}
export default TodoItem;
