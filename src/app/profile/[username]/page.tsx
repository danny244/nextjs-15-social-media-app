import { Feeds } from "@/components/homepage/center-screen/feeds/feeds";
import { LeftMenu } from "@/components/homepage/left-screen/left-menu";
import { RightMenu } from "@/components/homepage/right-screen/right-menu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }: { params: { username: string } }) {

      const username = params.username;

      const user = await prisma.user.findFirst({
            where: {
                  username: username
            },

            include: {
                  _count: {
                        select: {
                              followers: true,
                              followings: true,
                              posts: true
                        }
                  }
            }
      })

      if (!user) {
            return notFound()
      }


      // We are checking if the current user we are looking for has been blocked by us or not
      const { userId: currentUserId } = auth();

      let isBlocked;

      if (currentUserId) {
            const res = await prisma.block.findFirst({
                  where: {
                        blockerId: user.id,
                        blockedId: currentUserId
                  }
            });

            if (res) {
                  isBlocked = true;
            };
      } else {
            isBlocked = false
      }


      if (isBlocked) {
            return notFound()
      }

      return <section className="flex gap-6 p-6">
            <div className="hidden xl:block w-[20%]">
                  <LeftMenu type="profile" />
            </div>


            <div className="w-full lg:w-[70%] xl:w-[50%]">
                  <div className="flex flex-col gap-6">

                        <div className="flex flex-col items-center justify-center">
                              <div className="w-full h-64 relative">

                                    <Image
                                          src={user.cover || '/noCover.png'}
                                          alt="image"
                                          fill
                                          className="object-cover rounded-md"
                                    />


                                    <Image
                                          src={user.avatar || '/noAvatar.png'}
                                          alt="image"
                                          width={128}
                                          height={128}
                                          className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                                    />

                              </div>

                              <h1 className="mt-20 mb-4 text-2xl font-medium">
                                    {(user.name && user.surname)
                                          ? user.name + " " + user.surname
                                          : user.username}
                              </h1>

                              <div className="flex justify-center items-center gap-12 mb-4">

                                    {[1, 2, 3].map((_, i) => {
                                          let num: number;
                                          let text: string;

                                          if (i == 0) {
                                                num = user._count.posts
                                                text = 'Posts'

                                          } else if (i == 1) {
                                                num = user._count.followers
                                                text = 'Followers'

                                          } else {
                                                num = user._count.followings
                                                text = 'Following'
                                          }


                                          return <div
                                                key={i}
                                                className="flex flex-col items-center"
                                          >
                                                <span className="font-medium">{num}</span>
                                                <span className="text-sm">{text}</span>
                                          </div>
                                    })}

                              </div>

                        </div>

                        <Feeds />
                  </div>
            </div>


            <div className="hidden lg:block w-[30%]">
                  <RightMenu user={user} />
            </div>
      </section>
}