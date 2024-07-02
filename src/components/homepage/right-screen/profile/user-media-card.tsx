import Image from "next/image";
import Link from "next/link";

export function UserMediaCard({ userId }: { userId?: string }) {
      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center">
                  <p className="text-gray-500">User Information</p>
                  <Link href='/' className="text-blue-500 text-xs">See all</Link>
            </div>

            {/* Bottom */}
            <div className="flex gap-4 justify-between flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
                        return <div
                              key={i}
                              className="relative w-1/5 h-24"
                        >
                              <Image
                                    src='https://images.unsplash.com/photo-1692954065019-f3639b079c3c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                                    alt="image"
                                    fill
                                    className="object-cover rounded-md"
                              />
                        </div>
                  })}
            </div>
      </div>
}