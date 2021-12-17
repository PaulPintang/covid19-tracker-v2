import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
