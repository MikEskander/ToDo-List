import React from "react";

function Tests() {
  var numbers = [5, 203, 2334, 34, 68];

  const Numbers = (num) => num > 70;

  //this is like a sum function
  const reduceNumbers = (accumulator, currentNumber) => {
    return accumulator + currentNumber;
  };

  //

  const filter = numbers.filter(Numbers);
  const reduce = numbers.reduce(reduceNumbers);
  const find = numbers.find(Numbers);
  const findIndex = numbers.findIndex(Numbers);

  return (
    <div>
      <p> filter: {filter}</p>
      <p> reduce: {reduce}</p>
      <p> find: {find}</p>
      <p> find: {findIndex}</p>
    </div>
  );
}

export default Tests;
