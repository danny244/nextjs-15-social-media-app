"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../client";

export const acceptFollowReqest = async (userId: string) => {
      try {
            const { userId: currentUserId } = auth()

            if (!currentUserId) {
                  throw new Error("You are not verified");
            }


            const existingFollowRequest = await prisma.followRequest.findFirst({
                  where: {
                        senderId: userId,
                        receiverId: currentUserId
                  }
            })

            if (existingFollowRequest) {
                  // when we try to accept a request it looks for the request first in the database and then delete it from the [followRequest array] and thenn add it as a new [follower] for that particular user

                  await prisma.followRequest.delete({
                        where: {
                              id: existingFollowRequest.id
                        }
                  })

                  await prisma.follower.create({
                        data: {
                              followerId: userId,
                              followingId: currentUserId
                        }
                  })
            }


      } catch (error) {
            console.error('Error from [actions.accept-or-decline_folllow_request.ts] an error occured Accepting a users follow request ', error);
            throw new Error("Something went wrong");

      }
}



export const declineFollowReqest = async (userId: string) => {
      try {
            const { userId: currentUserId } = auth()

            if (!currentUserId) {
                  throw new Error("You are not verified");
            }


            const existingFollowRequest = await prisma.followRequest.findFirst({
                  where: {
                        senderId: userId,
                        receiverId: currentUserId
                  }
            })

            if (existingFollowRequest) {
                  // when we try to accept a request it looks for the request first in the database and then delete it from the [followRequest array] and thenn add it as a new [follower] for that particular user

                  await prisma.followRequest.delete({
                        where: {
                              id: existingFollowRequest.id
                        }
                  })

            }


      } catch (error) {
            console.error('Error from [actions.accept-or-decline_folllow_request.ts] an error occured declining a users follow request ', error);
            throw new Error("Something went wrong");

      }
}