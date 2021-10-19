import logo from "./assets/logo.svg";
import avatarImage from "./assets/image-avatar.png";
import shoppingCart from "./assets/icon-cart.svg";
import "./App.scss";

function App() {

  return (
    <div style={{ maxWidth: 1440, margin: "30px 165px" }}>
      <div
        id="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom:35
        }}
      >
        <img alt="logo" src={logo} style={{ height: 20 }} />
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: "space-between",
            margin: "0 45px",
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
            <span className="nav">Collections</span>
            <span className="nav">Men</span>
            <span className="nav">Women</span>
            <span className="nav">About</span>
            <span className="nav">Contact</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <img
              alt="shopping-cart"
              src={shoppingCart}
              style={{ height: 20, width: 22 }}
            />
          </div>
        </div>
        <img id="avatar" alt="avatar" src={avatarImage} style={{ height: 50, width: 50 }} />
      </div>
    </div>
  );
}

export default App;