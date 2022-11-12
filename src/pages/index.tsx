import { type NextPage } from "next";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const word = trpc.word.defineWord.useQuery({ word: "hermeneutic" });
  const { data: words } = trpc.word.getWords.useQuery();

  const AddWordButton = () => {
    const ctx = trpc.useContext();
    const { mutate } = trpc.word.addWord.useMutation({
      onSuccess: () => ctx.invalidate(),
    });
    const handleAddWord = () => mutate({ word: "Somethuing" });
    return <button onClick={handleAddWord}>Add Word</button>;
  };

  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Vocab SRS
        </h1>
        <AddWordButton />
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3"></div>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {words?.map((w) => (
            <div className="m-5 p-5 text-slate-500" key={w.id}>
              <p>{w.word}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
