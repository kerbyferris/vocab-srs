import { trpc } from "../utils/trpc";

type WordCardProps = {
  word: string;
  definition: string;
  id: string;
};

const WordCard: React.FC<WordCardProps> = ({ word, definition, id }) => {
  const ctx = trpc.useContext();
  const { mutate: deleteFlashcard } =
    trpc.flashcard.deleteFlashcard.useMutation({
      onSuccess: () => ctx.invalidate(),
    });

  const handleDeleteFlashcard = () => deleteFlashcard({ id });
  return (
    <div className="flex-1 p-3 text-slate-500">
      <span>{word}</span>
      <span>{definition}</span>
      <button onClick={handleDeleteFlashcard}>[X]</button>
    </div>
  );
};

export default WordCard;
