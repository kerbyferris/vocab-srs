import { type NextPage } from "next";
import { trpc } from "../utils/trpc";

// TODO:
// - style cards
// - one card at a time using css?
// - buttons to set difficulty
// - route for updating flashcard with difficulty
// - way to run timer from when a card becomes visible?
// - global menu

const Study: NextPage = () => {
  const { data: flashcards } = trpc.flashcard.getFlashcards.useQuery();

  return (
    <div>
      {flashcards?.map(({ front, back, id }) => {
        return (
          <div key={id}>
            <div>{front}</div>
            <div>{back}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Study;
