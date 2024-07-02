import Image from "next/image";

export function Ad({ size }: { size: 'sm' | 'md' | 'lg' }) {
      return <div className="p-4 bg-white rounded-md shadow-md text-sm">
            {/* Top */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                  <p>Sponsored Ads</p>
                  <Image src='/more.png' alt="image" width={16} height={16} />
            </div>


            {/* Bottom */}
            <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
                  <div
                        className={`relative w-full ${size === 'sm'
                              ? 'h-24'
                              : size === 'md'
                                    ? 'h-36'
                                    : 'h-48'}`}
                  >
                        <Image
                              src='https://images.unsplash.com/photo-1717092068583-99ca9c195f3a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                              alt="image"
                              fill
                              className="object-cover rounded-lg"
                        />

                  </div>

                  <div className="flex items-center gap-4 ">
                        <Image
                              src='https://images.unsplash.com/photo-1717092068583-99ca9c195f3a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                              alt="image"
                              width={24}
                              height={24}
                              className="object-cover rounded-full w-6 h-6 "
                        />

                        <p className="text-blue-500 font-medium ">BigChef Lounge</p>
                  </div>

                  <p className={size === 'sm' ? "text-xs" : 'text-sm'}>
                        {size === 'sm'
                              ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima.'
                              : size === 'md'
                                    ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus sint quasi, voluptatem est earum eaque. Quae eligendi aut explicabo.'
                                    : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, repudiandae eum, optio vitae tenetur dicta distinctio nobis dolorem nemo enim similique aliquid asperiores veniam placeat quos laboriosam explicabo! Cumque, in.'}
                  </p>

                  <button className="bg-gray-200 text-gray-500 text-xs p-2 rounded-lg">Learn More</button>

            </div>
      </div>
}