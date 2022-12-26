import React, { useEffect, useState } from "react";

function DictInformation({ input, getInput, getWord }) {
  const [word, setWord] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [meanings, setMeanings] = useState([]);

  // console.log(input);
  // console.log(getInput);

  useEffect(() => {
    const link = "https://api.dictionaryapi.dev/api/v2/entries/en/" + getWord;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].word);
        console.log(data);
        setPhonetics(data[0].phonetic);
        setMeanings(data[0].meanings);
      });
  }, [getWord]);
  console.log(word);
  return (
    <div className=" rounded-xl h-75">
      <h1>
        {word} {phonetics}
      </h1>
      <div>
        {meanings.map((meanings, index) => {
          return (
            <div key={index}>
              <div className="flex">
                <h2>
                  Part of speech : - {meanings.partOfSpeech} ;
                  <span>
                    {meanings.definitions.map((selectWord, index) => {
                      return (
                        <p key={index} className="flex">
                          Meaning: {selectWord.definition}
                        </p>
                      );
                    })}
                  </span>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DictInformation;
