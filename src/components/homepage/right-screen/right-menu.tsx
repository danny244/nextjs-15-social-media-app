import { User } from "@prisma/client";
import { Ad } from "./Ad";
import { Birthdays } from "./birthdays";
import { FriendRequests } from "./friend-request/friend-requests";
import { UserInfoCard } from "./profile/user-info-card";
import { UserMediaCard } from "./profile/user-media-card";
import { Suspense } from "react";

export function RightMenu({ user }: { user?: User }) {
      return <div className="flex flex-col gap-6">
            {user ? <>
                  <Suspense fallback="loading...">
                        <UserInfoCard user={user} />
                  </Suspense>

                  <Suspense fallback="loading...">
                        <UserMediaCard user={user} />
                  </Suspense>
            </> : null}

            <FriendRequests />

            <Birthdays />

            <Ad size="md" />
      </div>
}