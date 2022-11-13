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
    <div className="grid grid-cols-6 gap-2 rounded border-2 border-gray-400 bg-gray-100">
      <div className="bg-gray-300 p-2 font-bold">{word}</div>
      <div className="col-span-4 p-2">{definition}</div>
      <div className="flex justify-end bg-gray-100 p-2">
        <button
          className="bg-red-300 p-1 font-bold text-white"
          onClick={handleDeleteFlashcard}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default WordCard;
