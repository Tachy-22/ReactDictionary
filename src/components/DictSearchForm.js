import React, { useState } from "react";

function DictSearchForm(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(input);
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex space-x-2 py-5">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-2/5 p-3 rounded-lg"
          placeholder="Enter word you wish to look up!"
          autoFocus
        ></input>
        <button
          type="submit"
          className="p-3 rounded-lg text-white hover:shadow-xl "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default DictSearchForm;
