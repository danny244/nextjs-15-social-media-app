import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { UserInfoCardInteraction } from "./user-info-card-interaction";
import { UpdateUser } from "./update-profile";

export async function UserInfoCard({ user }: { user: User }) {

      const createdDate = new Date(user?.createdAt)

      const formattedData = createdDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      })

      let isUserBlocked = false;
      let isFollowing = false;
      let isFollowingSent = false;

      const { userId: currentUserId } = auth();

      if (currentUserId) {
            const blockRes = await prisma.block.findFirst({
                  where: {
                        blockerId: currentUserId,
                        blockedId: user.id
                  }
            })

            blockRes
                  ? (isUserBlocked = true)
                  : (isUserBlocked = false)




            const followRes = await prisma.follower.findFirst({
                  where: {
                        followerId: currentUserId,
                        followingId: user.id
                  }
            })

            followRes
                  ? (isFollowing = true)
                  : (isFollowing = false)



            const followReqRes = await prisma.followRequest.findFirst({
                  where: {
                        senderId: currentUserId,
                        receiverId: user.id
                  }
            })

            followReqRes
                  ? (isFollowingSent = true)
                  : (isFollowingSent = false)
      }

      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-4">

            {/* Top */}
            <div className="flex justify-between items-center">
                  <p className="text-gray-500">User Information</p>

                  {currentUserId === user.id
                        ? <UpdateUser
                              user={user}
                        />
                        : <Link href='/' className="text-blue-500 text-xs">See all</Link>}
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-4 text-gray-500">

                  <div className="flex items-center gap-2">
                        <p className="text-xl text-black">
                              {(user.name && user.surname)
                                    ? user.name + " " + user.surname
                                    : user.username}
                        </p>


                        <p className="text-sm">{user.username}</p>
                  </div>


                  {user.description &&
                        <p>{user.description}</p>
                  }


                  {[1, 2, 3].map((_, i) => {
                        let text: string;
                        let image: string;

                        if (i == 0) {
                              text = `Living in ${user.city}`
                              image = '/map.png'

                        } else if (i == 1) {
                              text = `Went to ${user.school}`
                              image = '/school.png'

                        } else if (i == 2) {
                              text = `Works at ${user.work}`
                              image = '/work.png'
                        }

                        return <div
                              key={i}
                              className="flex items-center gap-2">
                              <Image
                                    src={image!}
                                    alt="image"
                                    width={16}
                                    height={16}
                              />
                              <p className="font-bold">{text!}</p>
                        </div>
                  })}

                  <div className="flex flex-col gap-4">
                        {user.website && <div className="flex gap-1 items-center">
                              <Image
                                    src='/link.png'
                                    alt="image"
                                    width={16}
                                    height={16}
                              />

                              <Link
                                    href={user.website}
                                    className="text-blue-500 font-medium"
                              >
                                    {user.website}
                              </Link>
                        </div>}

                        <div className="flex gap-1 items-center">
                              <Image
                                    src='/date.png'
                                    alt="date"
                                    width={16}
                                    height={16}
                              />
                              <p>Joined {formattedData}</p>
                        </div>
                  </div>

                  {currentUserId && currentUserId !== user.id && <UserInfoCardInteraction
                        userId={user.id}
                        currentUserId={currentUserId}
                        isUserBlocked={isUserBlocked}
                        isFollowing={isFollowing}
                        isFollowingReqSent={isFollowingSent}
                  />}
            </div>
      </div>
}