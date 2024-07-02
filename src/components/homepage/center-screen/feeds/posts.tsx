import Image from "next/image";
import { Comments } from "./comments";

export function Posts() {
      return <div className="flex flex-col gap-4">
            {/* User */}
            <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                        <Image
                              src='https://images.unsplash.com/photo-1719658414203-83fdaf1bdb33?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D'
                              alt="image"
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                        />

                        <p className="font-medium">Jack Mcbride</p>
                  </div>

                  <Image src='/more.png' alt="image" width={16} height={15} />
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-4">
                  <div className="w-full min-h-96 relative">
                        <Image
                              src='https://images.unsplash.com/photo-1719347668247-e18e259d19f8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D'
                              alt="image"
                              fill
                              className="object-cover rounded-md"
                        />
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est animi esse assumenda officiis in sint neque quasi, quam quae aliquam, fugit sed vitae nulla, ullam corrupti eveniet similique suscipit laudantium nihil adipisci reprehenderit exercitationem! Ipsam ullam et expedita ad.</p>
            </div>

            {/* Interaction */}
            <div className="flex items-center justify-between text-sm my-4">

                  <div className="flex gap-8">
                        {[1, 2].map((d, i) => {

                              let image: string;
                              let text: string;

                              let amount: number;

                              if (i == 0) {
                                    image = '/like.png'
                                    text = 'Likes'
                                    amount = 123

                              } else if (i == 1) {
                                    image = '/comment.png'
                                    text = 'Comments'
                                    amount = 203
                              }

                              return <div
                                    key={i}
                                    className="flex items-center gap-2 justify-around bg-slate-100 py-2 px-4 rounded-lg"
                              >
                                    <Image
                                          src={image!}
                                          alt="image"
                                          width={16}
                                          height={16}
                                          className="cursor-pointer"
                                    />

                                    <p className="text-gray-300">|</p>
                                    <p className="text-gray-500">
                                          <span>{amount!}</span>{" "}
                                          <span className="hidden md:inline">{text!}</span>
                                    </p>
                              </div>
                        })}

                  </div>



                  <div className="flex items-center gap-2 justify-around bg-slate-100 py-2 px-4 rounded-lg">
                        <Image
                              src='/share.png'
                              alt="image"
                              width={16}
                              height={16}
                              className="cursor-pointer"
                        />

                        <p className="text-gray-300">|</p>
                        <p className="text-gray-500">
                              <span>{454}</span>{" "}
                              <span className="hidden md:inline">Shares</span>
                        </p>
                  </div>

            </div>

            <Comments />
      </div>
}