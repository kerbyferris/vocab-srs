import { type NextPage } from "next";
import GetDefinition from "../components/get-definition";
import WordCard from "../components/word-card";

// TODO:
// - style this
// - nice font?

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: words } = trpc.flashcard.getFlashcards.useQuery();

  return (
    <>
      <main className="flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Vocab SRS
        </h1>
        <GetDefinition />
        <div className="flex-col">
          {words?.map(({ word, definition, id }) => (
            <WordCard word={word} definition={definition} id={id} key={id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
