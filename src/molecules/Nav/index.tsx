import SettingsIcon from "../../atoms/vectors/settings-icon";
import BellIcon from "../../atoms/vectors/bell-icon";
import "./styles.scss";
import Avatar from "../../atoms/Avatar";

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src="/images/TodoLogo.svg" className="logo" />
        <h1 className="logo-text">ToDo</h1>
      </div>
      <div className="cta-container">
        <SettingsIcon />
        <BellIcon />
        <Avatar />
      </div>
    </nav>
  );
};

export default Nav;
