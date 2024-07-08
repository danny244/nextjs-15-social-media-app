"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const addStory = async (img: string) => {
      const { userId } = auth();

      if (!userId) throw new Error("User is not authenticated!");

      try {
            const existingStory = await prisma.stories.findFirst({
                  where: {
                        userId,
                  },
            });

            if (existingStory) {
                  await prisma.stories.delete({
                        where: {
                              id: existingStory.id,
                        },
                  });
            }
            const createdStory = await prisma.stories.create({
                  data: {
                        userId,
                        img,
                        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
                  },
                  include: {
                        user: true,
                  },
            });

            return createdStory;

      } catch (error) {
            console.error('Error from [actions.add_post.ts] an error occured adding a new post ', error);
            throw new Error("Something went wrong");

      }
};
