import React from "react";
import DictMain from "./components/DictMain";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className="w-full">
      <HeaderBar />
      <div className="m-10 App flex flex-col">
        <h1 className="">Enter the word you wish to search !</h1>
        <DictMain />
      </div>
    </div>
  );
}

export default App;
