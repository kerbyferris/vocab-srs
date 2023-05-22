import { type NextPage } from "next";
import GetDefinition from "../components/get-definition";
import WordCard from "../components/word-card";

// TODO:
// - nice font?
// - deploy with vercel
// - react native in repo
// - redux?

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: words } = trpc.flashcard.getFlashcards.useQuery();

  return (
    <>
      <GetDefinition />
      <div className="grid gap-3">
        {words?.map(({ word, definition, id }) => (
          <WordCard word={word} definition={definition} id={id} key={id} />
        ))}
      </div>
    </>
  );
};

export default Home;
