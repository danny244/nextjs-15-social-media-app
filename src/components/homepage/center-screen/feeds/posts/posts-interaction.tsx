"use client"

import { likeUnlike } from "@/lib/actions/actions.like_unlike";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useOptimistic, useState } from "react";


export function PostInteraction({ postId, likes, commentNumber }: { postId: number; likes: string[]; commentNumber: number }) {

      const { isLoaded, userId } = useAuth();

      const [likeState, setLikeState] = useState({
            likeCount: likes.length,
            isLiked: userId ? likes.includes(userId) : false
      })

      const [optimisticLike, switchOptimisticLike] = useOptimistic(likeState, (state, value) => {
            return {
                  likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                  isLiked: !state.isLiked
            }
      }
      )

      const likeUnlikeAction = async () => {
            switchOptimisticLike('')

            try {
                  await likeUnlike(postId);

                  setLikeState((state) => ({
                        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                        isLiked: !state.likeCount
                  }))
            } catch (error) {
                  console.error('An error occured liking a post in [posts-interaction.tsx] ', error);
            }
      }

      return <div className="flex items-center justify-between text-sm my-4">

            <div className="flex gap-8">
                  {[1, 2].map((d, i) => {

                        let image: string;
                        let text: string;

                        let amount: number;

                        if (i == 0) {
                              image = optimisticLike.isLiked ? '/liked.png' : '/like.png'
                              text = 'Likes'
                              amount = optimisticLike.likeCount

                        } else if (i == 1) {
                              image = '/comment.png'
                              text = 'Comments'
                              amount = commentNumber
                        }

                        return <div
                              key={i}
                              className="flex items-center gap-2 justify-around bg-slate-100 py-2 px-4 rounded-lg"
                        >
                              <form action={i == 0 ? likeUnlikeAction : ''}>
                                    <button>
                                          <Image
                                                src={image!}
                                                alt="image"
                                                width={16}
                                                height={16}
                                                className="cursor-pointer"
                                          />
                                    </button>
                              </form>

                              <p className="text-gray-300">|</p>
                              <p className="text-gray-500">
                                    <span>{amount!}</span>{" "}
                                    <span className="hidden md:inline">{text!}</span>
                              </p>
                        </div>
                  })}

            </div>



            <div className="flex items-center gap-2 justify-around bg-slate-100 py-2 px-4 rounded-lg">
                  <Image
                        src='/share.png'
                        alt="image"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                  />

                  <p className="text-gray-300">|</p>

                  <p className="text-gray-500">
                        <span>{454}</span>{" "}
                        <span className="hidden md:inline">Shares</span>
                  </p>
            </div>

      </div>
}