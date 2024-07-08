import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { StoryList } from "./story-list";

export async function Stories() {

      const { userId: currentUserId } = auth();

      if (!currentUserId) {
            return;
      }

      const stories = await prisma.stories.findMany({
            where: {
                  expiresAt: {
                        gt: new Date() // gt: greated than
                  },

                  OR: [
                        {
                              user: {
                                    followers: {
                                          some: {
                                                followerId: currentUserId
                                          }
                                    }
                              }
                        },

                        { userId: currentUserId }
                  ]
            },

            include: {
                  user: true
            }

      })

      return <div className="bg-white rounded-lg p-4 shadow-md overflow-scroll text-sm scrollbar-hide">
            <div className="flex gap-8 w-max">

                  <StoryList
                        stories={stories}
                        userId={currentUserId}
                  />

            </div>
      </div>
}