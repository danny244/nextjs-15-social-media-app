import { Ad } from "./Ad";
import { Birthdays } from "./birthdays";
import { FriendRequests } from "./friend-requests";
import { UserInfoCard } from "./profile/user-info-card";
import { UserMediaCard } from "./profile/user-media-card";

export function RightMenu({ userId }: { userId?: string }) {
      return <div className="flex flex-col gap-6">
            {userId ? <>
                  <UserInfoCard userId={userId} />
                  <UserMediaCard userId={userId} />
            </> : null}

            <FriendRequests />

            <Birthdays />
            
            <Ad size="md" />
      </div>
}