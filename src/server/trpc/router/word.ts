import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const wordRouter = router({
  defineWord: publicProcedure
    .input(z.object({ word: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        definition: `${input?.word ?? "world"}`,
      };
    }),
  addWord: publicProcedure
    .input(z.object({ word: z.string() }))
    .mutation(({ ctx, input }) => {
      const { word } = input;
      return ctx.prisma.word.create({ data: { word } });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getWords: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.word.findMany();
  }),
});
