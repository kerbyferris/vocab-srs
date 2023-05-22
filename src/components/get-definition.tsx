import { useState } from "react";
import AddFlashcard from "./add-flashcard";
import Button from "./basic-button";

// TODO:
// - clear input on getDefinition
// - type dictionary api response (nested types?)
// - handle api error
// - handle no definition found
// - handle multiple definitions found
// - field to drop in manual definition when none is found
// - web scrape-ish for wikipedia/SEP?
// - do I really need to refetch on blur?
// - where to put this fetch?
// - response as editable?

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
    <div className="grid">
      <input
        className="border-2 border-gray-300 p-2"
        onChange={handleInput}
        placeholder="Word"
      />
      <Button handler={handleGetDefinition} text="Look up Word" />

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
