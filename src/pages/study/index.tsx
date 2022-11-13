import { type NextPage } from "next";
import Flashcard from "../../components/flashcard";
import { trpc } from "../../utils/trpc";

const Study: NextPage = () => {
  const { data: flashcards } = trpc.flashcard.getFlashcards.useQuery();

  return (
    <div className="grid gap-3 text-left md:grid-cols-3 lg:w-2/3">
      {flashcards?.map(({ word, definition, id }) => (
        <Flashcard front={definition} back={word} key={id} />
      ))}
    </div>
  );
};

export default Study;
