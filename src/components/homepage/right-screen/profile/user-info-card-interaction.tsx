"use client"

import { switchBlock } from "@/lib/actions/actions.block_user"
import { switchFollow } from "@/lib/actions/actions.follow_user"
import { useOptimistic, useState } from "react"

type UserInfoCardInteractionProps = {
      userId: string,
      currentUserId: string | null,
      isUserBlocked: boolean,
      isFollowing: boolean,
      isFollowingReqSent: boolean
}

export function UserInfoCardInteraction({ currentUserId, isFollowing, isFollowingReqSent, isUserBlocked, userId }: UserInfoCardInteractionProps) {

      const [userState, setUserState] = useState({

            following: isFollowing,
            blocked: isUserBlocked,
            followingReqSent: isFollowingReqSent
      })

      const follow = async () => {

            switchOptimisticState('follow')

            try {
                  await switchFollow(userId)

                  setUserState((prev) => ({
                        ...prev,
                        following: prev.following && false,
                        followingReqSent: !prev.following && !prev.followingReqSent ? true : false
                  }))

            } catch (error) {
                  console.error('Error in user-info-card follow button component', error);

            }
      }

      const block = async () => {
            switchOptimisticState('block')

            try {
                  await switchBlock(userId);

                  setUserState((prev) => ({
                        ...prev,
                        blocked: !prev.blocked
                  }))

            } catch (error) {
                  console.error('Error in user-info-card Block button component', error);
            }
      }

      const [optimisticState, switchOptimisticState] = useOptimistic(userState, (state, value: "follow" | "block") => value === 'follow' ? {
            ...state,
            
            following: state.following && false,
            followingReqSent: !state.following && !state.followingReqSent ? true : false
      } : {
            ...state,
            blocked: !state.blocked
      })

      return <>
            <form action={follow}>
                  <button className="w-full bg-blue-500 text-sm text-white rounded-md p-2">
                        {optimisticState.following
                              ? 'Following'
                              : optimisticState.followingReqSent
                                    ? 'Follow Request sent'
                                    : 'Follow'}
                  </button>
            </form>

            <form action={block} className="self-end">
                  <button className="text-red-400 self-end text-xs cursor-pointer">
                        {optimisticState.blocked
                              ? 'Unblock User'
                              : 'Block User'}
                  </button>
            </form>
      </>
}