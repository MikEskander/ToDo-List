import React, { useState } from "react";

function Time() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const currentTime = new Date().getHours();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  const customStyle = {
    color: "",
  };
  function greeting() {
    if (currentTime < 12) {
      customStyle.color = "yellow";
      return <p>Good morning, it is {time}</p>;
    } else if (currentTime < 18) {
      customStyle.color = "white";
      return <p>Good afternoon, it is {time}</p>;
    } else {
      customStyle.color = "black";
      return <p>Good evening, it is {time}</p>;
    }
  }

  const newDate = new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <div className="container">
      <h1 style={customStyle}>{greeting()}</h1>
      <h2>
        {month}/{day}/{year}
      </h2>
    </div>
  );
}

export default Time;
