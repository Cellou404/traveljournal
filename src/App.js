import React from "react";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import data from "./data";
import "./App.css";

function App() {
  const journals = data.map((item) => {
    return <Journal key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <div className="journal-container">{journals}</div>
    </div>
  );
}

export default App;
