import { auth } from "@clerk/nextjs/server"
import { Posts } from "./posts/posts"
import prisma from "@/lib/client";

export async function Feeds({ username }: { username?: string }) {

      const { userId } = auth();

      let posts;

      if (username) {
            posts = await prisma.post.findMany({
                  where: {
                        user: { // finding a paricular users post using the users username
                              username: username
                        }
                  },

                  include: {
                        user: true,
                        likes: { // we didnt add true to this one because it will get the user infomations we just need id here to check weather ous current id is inside or not 
                              select: {
                                    userId: true
                              }
                        },
                        _count: {
                              select: {
                                    comment: true
                              }
                        }
                  },

                  orderBy: {
                        createdAt: 'desc'
                  }

            })
      }

      if (!username && userId) {
            // fetching the posts of we is following us and who we are following posts
            const following = await prisma.follower.findMany({
                  where: {
                        followerId: userId
                  },

                  select: {
                        followingId: true
                  }
            })            

            const followingIds = following.map((f => f.followingId));
            const ids = [userId, ...followingIds]

           posts = await prisma.post.findMany({
                  where: {
                        userId: {
                              in: ids
                        }
                  },

                  include: {
                        user: true,
                        likes: { // we didnt add true to this one because it will get the user infomations we just need id here to check weather ous current id is inside or not 
                              select: {
                                    userId: true
                              }
                        },

                        _count: {
                              select: {
                                    comment: true
                              }
                        }
                  },

                  orderBy: {
                        createdAt: 'desc'
                  }
            })
      }

      

      return <div className="p-4 rounded-lg shadow-md  flex flex-col gap-12">
            {posts!?.length
                  ? posts?.map((p, _) => {
                        //@ts-ignore
                        return <Posts key={p.id} posts={p} />
                  })
                  : <p>No post found</p>}
      </div>
}