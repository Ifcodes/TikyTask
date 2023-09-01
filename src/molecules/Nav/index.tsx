import React from "react";
import SettingsIcon from "../../atoms/vectors/settings-icon";
import BellIcon from "../../atoms/vectors/bell-icon";
import "./styles.scss";
import Avatar from "../../atoms/Avatar";

const Nav = () => {
  return (
    <nav>
      <h1 className="logo">ToDo</h1>
      <div className="cta-container">
        <SettingsIcon />
        <BellIcon />
        <Avatar />
      </div>
    </nav>
  );
};

export default Nav;
