import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li style={{ textDecoration: isDone ? "line-through" : null }}>
        {props.text}
      </li>
      <button onClick={handleClick}>Complete</button>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default TodoItem;
