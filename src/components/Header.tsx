import React from "react";
import logo from "../assets/logo.svg";
import avatarImage from "../assets/image-avatar.png";
import shoppingCart from "../assets/icon-cart.svg";

const Header = () => {
    return (
      <header
        id="app-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <img alt="logo" src={logo} style={{ height: 20 }} />
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: "space-between",
            margin: "0 38px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: "27rem",
              justifyContent: "space-around",
              fontSize: 15,
            }}
          >
            <nav>Collections</nav>
            <nav>Men</nav>
            <nav>Women</nav>
            <nav>About</nav>
            <nav>Contact</nav>
          </div>
          <div>
            <img
              alt="shopping-cart"
              src={shoppingCart}
              style={{ height: 20, width: 22 }}
            />
          </div>
        </div>
        <img
          id="avatar"
          alt="avatar"
          src={avatarImage}
          style={{ height: 50, width: 50, marginTop: -15 }}
        />
      </header>
    );
}

export default Header;