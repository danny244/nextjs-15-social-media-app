import Image from "next/image";
import Link from "next/link";

export function FriendRequests() {
      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center">
                  <p className="text-gray-500">Friend Requests</p>
                  <Link href='/' className="text-blue-500 text-xs">See all</Link>
            </div>

            {/* Users */}
            {[1, 2, 3].map((u, _) => {
                  return <div key={u} className="flex items-center justify-between">
                        
                        <div className="flex items-center gap-4">
                              <Image
                                    src='https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                                    alt="image"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                              />
                              <p className="font-semibold">Wayne Burton</p>
                        </div>

                        <div className="flex gap-3 justify-end">
                              <Image
                                    src='/accept.png'
                                    alt="image"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer"
                              />
                              <Image
                                    src='/accept.png'
                                    alt="image"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer"
                              />
                        </div>
                  </div>
            })}
      </div>
}