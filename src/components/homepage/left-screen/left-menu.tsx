import Link from "next/link";
import { ProfileCard } from "./profile/profile-card";
import Image from "next/image";
import { Ad } from "../right-screen/Ad";

export function LeftMenu({ type }: { type: 'home' | 'profile' }) {
      return <div className="flex flex-col gap-6">
            {type === 'home' && <ProfileCard />}

            <div className="p-4 bg-white rounded-md shadow-md text-sm text-gray-500 flex flex-col gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
                        let text: string;
                        let image: string;

                        if (i == 0) {
                              text = 'My Posts'
                              image = '/posts.png'

                        } else if (i == 1) {
                              text = 'Activity'
                              image = '/activity.png'

                        } else if (i == 2) {
                              text = 'Marketplace'
                              image = '/market.png'

                        } else if (i == 3) {
                              text = 'Events'
                              image = '/events.png'

                        } else if (i == 4) {
                              text = 'Albums'
                              image = '/albums.png'

                        } else if (i == 5) {
                              text = 'Videos'
                              image = '/videos.png'

                        } else if (i == 6) {
                              text = 'News'
                              image = '/news.png'

                        } else if (i == 7) {
                              text = 'Courses'
                              image = '/courses.png'

                        } else if (i == 8) {
                              text = 'Lists'
                              image = '/lists.png'

                        } else if (i == 9) {
                              text = 'Marketplace'
                              image = '/market.png'

                        } else {
                              text = 'Settings'
                              image = '/settings.png'

                        }

                        return <>
                              <Link
                                    key={i}
                                    href='/'
                                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
                              >
                                    <Image
                                          src={image}
                                          alt="image"
                                          width={20}
                                          height={20}
                                    />

                                    <p>{text}</p>
                              </Link>
                              <hr className="border-t-1 border-gray-50 w-36 self-center" />
                        </>
                  })}

            </div>

            <Ad size="sm" />
      </div>
}