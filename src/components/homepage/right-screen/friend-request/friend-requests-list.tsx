"use client"

import { acceptFollowReqest, declineFollowReqest } from "@/lib/actions/actions.accept-or-decline_folllow_request"
import { FollowRequest, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type RequestWithUser = FollowRequest & { sender: User }


export function FriendRequestsList({ requests }: { requests: RequestWithUser[] }) {
      const [requestState, setRequestState] = useState(requests);

      const accept = async (requestId: number, userId: string) => {
            removeOptimisticRequests(requestId)

            try {
                  await acceptFollowReqest(userId);
                  setRequestState((prev) => prev.filter((req) => req.id !== requestId))

            } catch (error) {
                  console.error('An error occured accepting a friend request in [friend-request-list.tsx] ', error);

            }
      }


      const decline = async (requestId: number, userId: string) => {
            console.log('decline friend reqquest function Request id', requestId);
            console.log('decline friend reqquest function user id', userId);


            removeOptimisticRequests(requestId)

            try {
                  await declineFollowReqest(userId);
                  setRequestState((prev) => prev.filter((req) => req.id !== requestId))

            } catch (error) {
                  console.error('An error occured declining a friend request in [friend-request-list.tsx] ', error);

            }
      }

      const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
            requestState,
            (state, value: number) => state.filter((req) => req.id !== value)
      )

      return <div>
            {optimisticRequests.map((request, i) => {
                  return <div key={request.id} className="flex items-center justify-between">

                        <div className="flex items-center gap-4">
                              <Image
                                    src={request.sender.avatar || '/noAvatar.png'}
                                    alt="image"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                              />
                              <p className="font-semibold">
                                    {(request.sender.name && request.sender.surname)
                                          ? request.sender.name + " " + request.sender.surname
                                          : request.sender.username}
                              </p>
                        </div>

                        <div className="flex gap-3 justify-end">
                              {[1, 2].map((_, i) => {

                                    let imgUrl: string;

                                    if (i === 0) {
                                          imgUrl = '/accept.png'
                                    } else {
                                          imgUrl = '/reject.png'
                                    }

                                    return <form
                                          key={i}
                                          action={() => {
                                                i === 0
                                                      ? accept(request.id, request.sender.id)
                                                      : decline(request.id, request.sender.id)
                                          }}
                                    >
                                          <button>
                                                <Image
                                                      src={imgUrl}
                                                      alt="image"
                                                      width={20}
                                                      height={20}
                                                      className="cursor-pointer"
                                                />
                                          </button>
                                    </form>
                              })}
                        </div>
                  </div>
            })}
      </div>
}