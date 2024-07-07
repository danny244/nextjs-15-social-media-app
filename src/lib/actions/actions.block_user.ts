"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const switchBlock = async (userId: string) => {
      try {
            const {userId: currentUserId} = auth();

            if (!currentUserId) {
                  throw new Error("Error from [actions.follow_user.ts] file current User not found");
            }


            const existingBlock = await prisma.block.findFirst({
                  where: {
                        blockerId: currentUserId,
                        blockedId: userId
                  }
            })


            if (existingBlock) {
                  await prisma.block.delete({
                        where: {
                              id: existingBlock.id
                        }
                  })
            } else {
                  await prisma.block.create({
                        data: {
                              blockerId: currentUserId,
                              blockedId: userId
                        }
                  })
            }

      } catch (error) {
            console.error('Error from [actions.block_user.ts] an error occured blocking a user ', error);
            throw new Error("Something went wrong");

      }
}