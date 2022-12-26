import React, { useState } from "react";
import DictInformation from "./DictInformation";

import DictSearchForm from "./DictSearchForm";

function DictMain() {
  const [input, setInput] = useState("");
  const giveInput = (input) => {
    const word = input;
    setInput(word);
    // console.log(word)
  };
  return (
    <div>

      <DictSearchForm onSubmit={giveInput} />
      <DictInformation getWord={input} />
    </div>
  );
}

export default DictMain;
