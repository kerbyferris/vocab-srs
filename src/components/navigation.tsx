import Link from "next/link";

const Navigation = () => {
  return (
    <main>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
        Vocab SRS
      </h1>
      <nav className="flex">
        <Link className="m-2 bg-gray-500 p-2" href="/">
          Home
        </Link>
        <Link className="m-2 bg-gray-300 p-2" href="/study">
          Study
        </Link>
      </nav>
    </main>
  );
};

export default Navigation;
