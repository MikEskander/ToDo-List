import React, { useState } from "react";

function TodoItem() {
  const [isMousedOver, setMouseOver] = useState(false);
  var [status, setStatus] = useState(false);

  function strikeThrough() {
    setStatus((status = true));
  }
  function unStrikeThrough() {
    setStatus((status = false));
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

 
export default TodoItem;
