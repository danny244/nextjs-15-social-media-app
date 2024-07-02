import Image from "next/image";
import Link from "next/link";

export function Birthdays() {
      return <div className="p-4 bg-white rounded-md shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center">
                  <p className="text-gray-500">Birthdays</p>
            </div>

            {/* Users */}
            <div className="flex items-center justify-between">
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

                  <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
            </div>

            {/* Upcoming */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                  <Image
                        src='/gift.png'
                        alt="image"
                        width={24}
                        height={24}
                  />

                  <Link href='/' className="flex flex-col gap-1 text-xs ">
                        <p className="text-gray-700 font-semibold">
                              Upcoming Birthdays
                        </p>
                        <p className="text-gray-500">
                              see Other 16 Upcoming Birthdays
                        </p>
                  </Link>
            </div>
      </div>
}