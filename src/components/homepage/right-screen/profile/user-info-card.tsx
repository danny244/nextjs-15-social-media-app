import Image from "next/image";
import Link from "next/link";

export function UserInfoCard({ userId }: { userId?: string }) {
      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center">
                  <p className="text-gray-500">User Information</p>
                  <Link href='/' className="text-blue-500 text-xs">See all</Link>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-4 text-gray-500">
                  <div className="flex items-center gap-2">
                        <p className="text-xl text-black">LLoyed Fleming</p>
                        <p className="text-sm">@jonathan</p>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates nesciunt, officia voluptatibus laudantium dignissimos, illum consequatur voluptate itaque similique quidem maxime inventore repellat quam deserunt maiores, incidunt adipisci nihil?</p>

                  {[1, 2, 3].map((_, i) => {
                        let text: string;
                        let image: string;

                        if (i == 0) {
                              text = 'Living in denver'
                              image = '/map.png'

                        } else if (i == 1) {
                              text = 'went To Edger hign school'
                              image = '/school.png'

                        } else if (i == 2) {
                              text = 'Works at Apple Ind'
                              image = '/work.png'
                        }

                        return <div
                              key={i}
                              className="flex items-center gap-2">
                              <Image
                                    src={image!}
                                    alt="image"
                                    width={16}
                                    height={16}
                              />
                              <p className="font-bold">{text!}</p>
                        </div>
                  })}

                  <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                              <Image
                                    src='/link.png'
                                    alt="image"
                                    width={16}
                                    height={16}
                              />

                              <Link
                                    href='/'
                                    className="text-blue-500 font-medium"
                              >
                                    lama.dev
                              </Link>
                        </div>

                        <div className="flex gap-1 items-center">
                              <Image
                                    src='/date.png'
                                    alt="date"
                                    width={16}
                                    height={16}
                              />
                              <p>Joined November 2024</p>
                        </div>
                  </div>

                  <button className="bg-blue-500 text-sm text-white rounded-md p-2">Follow</button>
                  <p className="text-red-400 self-end text-xs cursor-pointer">Block User</p>
            </div>
      </div>
}