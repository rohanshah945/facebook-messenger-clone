import React from "react";
import "./Header.css";

function Header({ username }) {
  return (
    <nav className="header">
      <img
        className="header__image"
        src="http://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=50&h=50"
        alt=""
      />
      <h3 className="header__title">{`Facebook Messenger Clone🚀`}</h3>
      <h3 className="header__username"> {`Hi, ${username}!`} </h3>
    </nav>
  );
}

export default Header;
