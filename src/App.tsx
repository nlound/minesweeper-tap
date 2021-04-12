import React from "react";
import "./App.scss";
import MineField from "./components/MineField/MineField";
import { createField } from "./utils";
import { MineFieldSettings } from "./interfaces";

function App() {
  // game configuration
  const settings: MineFieldSettings = {
    width: 10,
    height: 8,
    bombs: 6,
  };
  const mineFieldData = createField(settings);

  return (
    <div className="App">
      <MineField mineFieldData={mineFieldData} settings={settings}></MineField>
    </div>
  );
}

export default App;
