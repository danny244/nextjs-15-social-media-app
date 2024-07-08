"use client"

import { createComment } from "@/lib/actions/actions.comments";
import { useAuth, useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";


type CommentWithUser = Comment & { user: User }

export function CommentClient({ comments, postId }: { comments: CommentWithUser[], postId: number }) {

      const { isLoaded, user } = useUser()
      const [commentState, setCommentState] = useState(comments);
      const [desc, setDesc] = useState("");

      const addComment = async () => {
            setOptimisticComments({
                  id: Math.random(),
                  desc,
                  postId,
                  userId: user?.id || Math.random().toString(),
                  updatedAt: new Date(Date.now()),
                  createdAt: new Date(Date.now()),

                  user: {
                        id: user?.id || Math.random().toString(),
                        avatar: user?.imageUrl || '/noAvatar.png',
                        city: "",
                        cover: '',
                        description: "",
                        name: user?.firstName || '',
                        school: '',
                        surname: user?.lastName || "",
                        username: user?.username || "",
                        website: '',
                        work: "",
                        createdAt: new Date(Date.now()),
                  }
            })

            try {
                  const createdComment = await createComment(postId, desc);
                  setCommentState((prev) => [createdComment, ...prev])

            } catch (error) {
                  console.error('An error occured adding a new comment [comment-client.tsx] ', error);
            }
      }

      const [optimisticComments, setOptimisticComments] = useOptimistic(commentState, (state, value: CommentWithUser) => [ // spreading our previous commentand then adding the new comment
            value,
            ...state
      ])


      return <div>
            {/* Write */}
            {user && <div className="flex items-center gap-4">
                  <Image
                        src={user.imageUrl}
                        alt="image"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                  />

                  <form
                        action={addComment}
                        className="flex flex-1 justify-between items-center bg-slate-100 rounded-md text-sm px-6 py-2 w-full"
                  >
                        <input
                              type="text"
                              placeholder="write a comment..."
                              onChange={({ target }) => setDesc(target.value)}
                              className="bg-transparent outline-none flex-1"
                        />
                        <Image
                              src='/emoji.png'
                              alt="image"
                              width={16}
                              height={16}
                              className="cursor-pointer"
                        />
                  </form>
            </div>}


            {/* Comment */}
            <div>

                  {optimisticComments.map(comment => <div
                        className="flex justify-between gap-4 mt-6"
                        key={comment.id}
                  >
                        {/* Avartar */}
                        <Image
                              src={comment.user.avatar || '/noAvatar.png'}
                              alt="image"
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                        />

                        {/* Description */}
                        <div className="flex flex-col gap-2 flex-1">
                              <p className="font-medium">
                                    {(comment.user.name && comment.user.surname)
                                          ? comment.user.name + " " + comment.user.surname
                                          : comment.user.username}
                              </p>

                              <p>{comment.desc}</p>

                              <div className="flex items-center gap-8 text-xs text-gray-500">
                                    <div className="flex items-center gap-2 justify-around bg-slate-100 py-2 px-4 rounded-lg">
                                          <Image
                                                src='/like.png'
                                                alt="image"
                                                width={12}
                                                height={12}
                                                className="cursor-pointer"
                                          />

                                          <p className="text-gray-300">|</p>
                                          <p className="text-gray-500">
                                                <span>0</span>{" "}
                                                <span className="hidden md:inline">Likes</span>
                                          </p>
                                    </div>

                                    <div>Reply</div>
                              </div>
                        </div>

                        {/* Icon */}
                        <Image
                              src='/more.png'
                              alt="image"
                              width={16}
                              height={16}
                              className="cursor-pointer w-4 h-4"
                        />
                  </div>)}

            </div>
      </div>
}