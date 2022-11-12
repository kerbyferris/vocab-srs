import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const flashcardRouter = router({
  getFlashcards: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.flashCard.findMany();
  }),
  addFlashcard: publicProcedure
    .input(
      z.object({
        word: z.string(),
        definition: z.string(),
        front: z.string(),
        back: z.string(),
        interval: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { word, definition, front, back, interval } = input;
      return ctx.prisma.flashCard.create({
        data: { word, definition, front, back, interval },
      });
    }),
  deleteFlashcard: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.flashCard.delete({ where: { id } });
    }),
});
