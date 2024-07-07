import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FriendRequestsList } from "./friend-requests-list";

export async function FriendRequests() {

      const { userId } = auth();

      if (!userId) {
            return null;
      }

      const requests = await prisma.followRequest.findMany({
            where: {
                  receiverId: userId,
            },

            include: {
                  sender: true
            }
      })

      // console.log(requests);
      

      if (requests.length === 0) {
            return null
      }

      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center">
                  <p className="text-gray-500">Friend Requests</p>
                  <Link href='/' className="text-blue-500 text-xs">See all</Link>
            </div>

            {/* Users */}
            <FriendRequestsList
                  requests={requests}
            />
      </div>
}