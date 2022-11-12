import { trpc } from "../utils/trpc";

type AddFlashcardProps = {
  word: string;
  definition: string;
  front: string;
  back: string;
  interval: number;
};

const AddFlashcard = ({
  word,
  definition,
  front,
  back,
  interval,
}: AddFlashcardProps) => {
  const ctx = trpc.useContext();
  const { mutate: addFlashcard } = trpc.flashcard.addFlashcard.useMutation({
    onSuccess: () => ctx.invalidate(),
  });
  const handleAddWord = () =>
    addFlashcard({ word, definition, front, back, interval });
  return (
    <div>
      <button onClick={handleAddWord}>Add To Flashcards</button>
    </div>
  );
};

export default AddFlashcard;
