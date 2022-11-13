import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navigation from "../components/navigation";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
};

export default trpc.withTRPC(App);
