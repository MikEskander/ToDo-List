import React from "react";
import Time from "./Time";
import Title from "./Title";
import Weather from "./Weather";

function Header() {
  return (
    <div className="header">
      <Title />
      <Time />
      <Weather />
    </div>
  );
}

export default Header;
