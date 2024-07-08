"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const createComment = async (postId: number, desc: string) => {
      try {
            const {userId} = auth();

            if (!userId) {
                  throw new Error("Error from [actions.follow_user.ts] file current User not found");
            }


            const createdComment = await prisma.comment.create({
                  data: {
                        userId,
                        postId,
                        desc
                  },

                  include: {
                        user: true
                  }
            })
            

            return createdComment;


      } catch (error) {
            console.error('Error from [actions.comments.ts] an error occured commenting on a users post ', error);
            throw new Error("Something went wrong");
      }
}