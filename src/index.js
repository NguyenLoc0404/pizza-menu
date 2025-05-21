import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Foooter />
    </div>
  );
}

const Header = () => {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato and mozarella"
        photoSrc="pizzas/focaccia.jpg"
        price="10"
      />
    </main>
  );
};

const Foooter = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} - All Rights Reserved
    </footer>
  );
};

const Pizza = (props) => {
  const style = { display: "flex", flexDirection: "column" };
  return (
    <div className="pizza" style={style}>
      <img src={props.photoSrc} alt="img error" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
