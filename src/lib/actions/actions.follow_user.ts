"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const switchFollow = async (userId: string) => {
      const { userId: currentUserId } = auth();

      try {


            if (!currentUserId) {
                  throw new Error("Error from [actions.follow_user.ts] file current User not found");

            }

            const existingFollow = await prisma.follower.findFirst({
                  where: {
                        followerId: currentUserId,
                        followingId: userId
                  }
            })

            if (existingFollow) {
                  await prisma.follower.delete({
                        where: {
                              id: existingFollow.id
                        }
                  })
            } else {

                  const existingFollowReq = await prisma.followRequest.findFirst({
                        where: {
                              senderId: currentUserId,
                              receiverId: userId
                        }
                  })


                  if (existingFollowReq) {
                        await prisma.followRequest.delete({
                              where: {
                                    id: existingFollowReq.id
                              }
                        })

                  } else {

                        // Creating a new following request
                        await prisma.followRequest.create({
                              data: {
                                    senderId: currentUserId,
                                    receiverId: userId
                              }
                        })
                  }
            }

      } catch (error) {
            console.error('Error from [actions.follow_user.ts] an error occured following a user ', error);
            throw new Error("Something went wrong");

      }
}