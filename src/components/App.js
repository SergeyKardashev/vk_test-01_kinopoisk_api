// App.js
import React from "react";
import logo from "../images/logo.svg"; // временно оставил
import "./App.css";
import { Promo } from "./Promo/Promo"; // именованный импорт

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" /> {/* временно оставил */}
      </header>
      <Promo /> {/* внедрение компонента Promo */}
    </div>
  );
}
