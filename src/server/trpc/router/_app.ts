import { router } from "../trpc";
import { wordRouter } from "./word";

export const appRouter = router({
  word: wordRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
