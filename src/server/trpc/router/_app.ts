import { router } from "../trpc";
import { flashcardRouter } from "./flashcard";

export const appRouter = router({
  flashcard: flashcardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
