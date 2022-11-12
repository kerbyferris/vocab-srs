import { useState } from "react";
import AddFlashcard from "./add-flashcard";

// TODO:
// - type dictionary api response (nested types?)
// - handle api error
// - clear input when getting definition
// - handle no definition found
// - field to drop in manual definition when none is found
// - web scrape-ish for wikipedia/SEP?
// - do I really need to refetch on blur?

const GetDefinition = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleInput = (e: { target: { value: string } }) =>
    setWord(e.target.value);

  const getDefinition = async (w: string) => {
    const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const url = `${baseUrl}${w}`;

    const response = await fetch(url);

    const [
      {
        meanings: [
          {
            definitions: [{ definition }],
          },
        ],
      },
    ] = await response.json();

    return definition;
  };

  const handleGetDefinition = async () => {
    const wordDefinition = await getDefinition(word);
    return setDefinition(wordDefinition);
  };

  return (
    <div>
      <input onChange={handleInput} placeholder="Word" />
      <button onClick={handleGetDefinition}>Get Definition</button>
      {definition && (
        <div>
          <span>{word}:</span>
          <span>{definition}</span>
          <AddFlashcard
            word={word}
            definition={definition}
            front={definition}
            back={word}
            interval={2.5}
          />
        </div>
      )}
    </div>
  );
};

export default GetDefinition;
