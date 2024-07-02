import Image from "next/image";

export function ProfileCard() {
      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                  <Image
                        src='https://images.unsplash.com/photo-1702529939203-04c666ee2b7f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                        alt='image'
                        fill
                        className="rounded-md object-cover"
                  />

                  <Image
                        src='https://images.unsplash.com/photo-1718162145034-7a7d7606c723?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                        alt="image"
                        width={48}
                        height={48}
                        className="w-12 h-12 absolute left-0 right-0 -bottom-6 rounded-full object-cover m-auto ring-1 ring-white z-10"
                  />
            </div>

            <div className="h-20 flex flex-col gap-2 items-center">
                  <p className="font-semibold">Edward Garfield may</p>

                  <div className="flex items-center gap-4">
                        <div className="flex gap-x-[0.1rem]">

                              {[1, 2, 3].map((_, i) => {
                                    return <Image
                                          key={i}
                                          src='https://images.unsplash.com/photo-1718162145034-7a7d7606c723?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                                          alt="image"
                                          width={12}
                                          height={12}
                                          className="w-3 h-3 rounded-full object-cover"
                                    />
                              })}

                        </div>

                        <p className="text-xs text-gray-500">500 Followers</p>
                  </div>

                  <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
      </div>
}