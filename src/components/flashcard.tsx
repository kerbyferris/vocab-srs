type FlashcardProps = {
  front: string;
  back: string;
};

const Flashcard: React.FC<FlashcardProps> = ({ front, back }) => {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-3 rounded border-2 border-gray-500 p-3">
      <div className="bg-gray-200 p-3">
        <span className="">{front}</span>
      </div>
      <div className="flex items-center justify-center bg-gray-600 p-3 text-white">
        <span className="text-2xl font-bold">{back}</span>
      </div>
    </section>
  );
};

export default Flashcard;
