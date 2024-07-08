"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const likeUnlike = async (postId: number) => {
      try {
            const {userId} = auth();

            if (!userId) {
                  throw new Error("User not authenticated")
            }


            const existingLike = await prisma.like.findFirst({
                  where: {
                        postId,
                        userId
                  }
            });

            if (existingLike) {
                  await prisma.like.delete({
                        where: {
                              id: existingLike.id
                        }
                  })

            } else {
                  await prisma.like.create({
                        data: {
                              postId,
                              userId
                        }
                  })
            }
            
      } catch (error) {
            console.error('Error from [actions.like_unlike.ts] an error occured liking or unliking a post ', error);
            throw new Error("Something went wrong");
      }
}