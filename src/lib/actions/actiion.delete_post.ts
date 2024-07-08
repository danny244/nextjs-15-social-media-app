"use server"


import { revalidatePath } from "next/cache";
import prisma from "../client";
import { auth } from "@clerk/nextjs/server";

export const deletePost = async (postId: number) => {
      const { userId } = auth();

      if (!userId) throw new Error("User is not authenticated!");

      try {
            await prisma.post.delete({
                  where: {
                        id: postId,
                        userId,
                  },
            });
            revalidatePath("/")


      } catch (error) {
            console.error('Error from [actions.add_post.ts] an error occured adding a new post ', error);
            throw new Error("Something went wrong");
      }
};