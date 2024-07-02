import Image from "next/image";

export function AddPost() {

      return <div className="p-4 rounded-lg shadow-md bg-white flex gap-4 justify-between text-sm">

            {/* Avater */}
            <Image
                  src='https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
                  alt="image"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover rounded-full"
            />

            {/* Post */}
            <div className="flex-1">

                  {/* Text Input */}
                  <form className="flex gap-4">
                        <textarea
                              name="desc"
                              id=""
                              placeholder="whats on your mind?"
                              className="bg-slate-100 rounded-lg flex-1 p-2"
                        />

                        <Image
                              src='/emoji.png'
                              alt="image"
                              width={20}
                              height={20}
                              className="w-5 h-5 self-end cursor-pointer"
                        />

                        {/* <button>Send</button> */}
                  </form>

                  {/* Post Options */}
                  <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                        {[1, 2, 3, 4].map((d, i) => {
                              
                              let image: string;
                              let text: string;

                              if (i == 0) {
                                    image = '/addimage.png'
                                    text = 'Photo'

                              } else if (i == 1) {
                                    image = '/addvideo.png'
                                    text = 'Video'

                              } else if (i == 2) {
                                    image = '/addevent.png'
                                    text = 'Event'

                              } else if (i == 3) {
                                    image = '/poll.png'
                                    text = 'Poll'
                              }

                              return <div
                                    key={i}
                                    className="flex items-center cursor-pointer gap-2"
                              >
                                    <Image
                                          src={image!}
                                          alt="image"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 self-end cursor-pointer"
                                    />

                                    <p>{text!}</p>
                              </div>
                        })}
                  </div>

            </div>

      </div>
}