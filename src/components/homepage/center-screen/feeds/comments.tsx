import Image from "next/image";

export function Comments() {
      return <div>
            {/* Write */}
            <div className="flex items-center gap-4">
                  <Image
                        src='https://images.unsplash.com/photo-1719401542081-5f007eaabfee?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D'
                        alt="image"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                  />

                  <div className="flex flex-1 justify-between items-center bg-slate-100 rounded-md text-sm px-6 py-2 w-full">
                        <input
                              type="text"
                              placeholder="write a comment..."
                              className="bg-transparent outline-none flex-1"
                        />
                        <Image
                              src='/emoji.png'
                              alt="image"
                              width={16}
                              height={16}
                              className="cursor-pointer"
                        />
                  </div>
            </div>


            {/* Comment */}
            <div>

                  <div className="flex justify-between gap-4 mt-6">
                        {/* Avartar */}
                        <Image
                              src='https://images.unsplash.com/photo-1691828621407-c07af8339953?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'
                              alt="image"
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                        />

                        {/* Description */}
                        <div className="flex flex-col gap-2 flex-1">
                              <p className="font-medium">Bernice spener</p>

                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt quidem hic qui voluptatum dolor minus ducimus unde id tempore quo aspernatur, sit nisi nulla nihil repudiandae, officia voluptate optio!</p>

                              <div className="flex items-center gap-8 text-xs text-gray-500">
                                    <div className="flex items-center gap-2 justify-around bg-slate-100 py-2 px-4 rounded-lg">
                                          <Image
                                                src='/like.png'
                                                alt="image"
                                                width={12}
                                                height={12}
                                                className="cursor-pointer"
                                          />

                                          <p className="text-gray-300">|</p>
                                          <p className="text-gray-500">
                                                <span>123</span>{" "}
                                                <span className="hidden md:inline">Likes</span>
                                          </p>
                                    </div>

                                    <div>Reply</div>
                              </div>
                        </div>

                        {/* Icon */}
                        <Image
                              src='/more.png'
                              alt="image"
                              width={16}
                              height={16}
                              className="cursor-pointer w-4 h-4"
                        />
                  </div>

            </div>
      </div>
}