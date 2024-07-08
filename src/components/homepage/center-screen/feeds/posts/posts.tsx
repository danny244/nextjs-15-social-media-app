import Image from "next/image";
import { Comments } from "../comments/comments";
import { Post as PostType, User } from "@prisma/client";
import { PostInteraction } from "./posts-interaction";
import { Suspense } from "react";
import { PostInfo } from "./posts-info";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType
      & { user: User }
      & { likes: [{ userId: string }] }
      & { _count: { comments: number } }

export function Posts({ posts }: { posts: FeedPostType }) {

      const {userId} = auth();

      return <div className="flex flex-col gap-4 p-6 rounded-xl bg-white shadow-md">
            {/* User */}

            <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                        <Image
                              src={posts?.user.avatar || '/noAvatar.png'}
                              alt="image"
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                        />


                        <p className="font-medium">
                              {(posts.user.name && posts.user.surname)
                                    ? posts.user.name + " " + posts.user.surname
                                    : posts.user.username}
                        </p>
                  </div>

                  {userId === posts.user.id && <PostInfo postId={posts.id} />}

            </div>


            {/* Desc */}
            <div className="flex flex-col gap-4">

                  {posts.img && <div className="w-full min-h-96 relative">
                        <Image
                              src={posts?.img}
                              alt="image"
                              fill
                              className="object-cover rounded-md"
                        />
                  </div>}


                  <p>{posts.desc}</p>

            </div>

            {/* Interaction */}
            <Suspense fallback="loading....">
                  <PostInteraction
                        postId={posts.id}
                        likes={posts.likes.map((l) => l.userId)}
                        commentNumber={posts._count.comments}
                  />
            </Suspense>


            <Suspense fallback="loading....">
                  <Comments
                        postId={posts.id}
                  />
            </Suspense>

      </div>
}