"use client"

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { AddNewPostButton } from "./add-new-post-button";
import { addPost } from "@/lib/actions/actions.add_post";

export function AddPost() {

      const { user, isLoaded } = useUser();
      const [desc, setDesc] = useState('');
      const [img, setUrl] = useState<any>();

      if (!isLoaded) {
            return "loading......"
      }

      return <div className="p-4 rounded-lg shadow-md bg-white flex gap-4 justify-between text-sm">

            {/* Avater */}
            <Image
                  src={user?.imageUrl || '/noAvatar.png'}
                  alt="image"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover rounded-full"
            />

            {/* Post */}
            <div className="flex-1">

                  {/* Text Input */}
                  <form action={(formdata) => addPost(formdata, img?.secure_url || "")} className="flex gap-4">
                        <textarea
                              name="desc"
                              id=""
                              onChange={({ target }) => setDesc(target.value)}
                              placeholder="whats on your mind?"
                              className="bg-slate-100 rounded-lg flex-1 p-2"
                        />

                        <div>
                              <Image
                                    src='/emoji.png'
                                    alt="image"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 self-end cursor-pointer"
                              />

                              <AddNewPostButton />
                        </div>
                  </form>

                  {/* Post Options */}
                  <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                        {[1, 2, 3, 4].map((d, i) => {

                              let image: string;
                              let text: string;
                              let jsx: JSX.Element;

                              if (i == 0) {
                                    image = '/addimage.png'
                                    text = 'Photo'
                                    jsx = <CldUploadWidget
                                          uploadPreset="next_15 social"
                                          onSuccess={(result, { widget }) => {
                                                setUrl(result.info),
                                                      widget.close()
                                          }}
                                    >
                                          {({ open }) => {
                                                return <Image
                                                      src={image!}
                                                      alt="image"
                                                      width={20}
                                                      height={20}
                                                      className="w-5 h-5 self-end cursor-pointer"
                                                      onClick={() => open()}
                                                />
                                          }}
                                    </CldUploadWidget>

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
                                    key={d}
                                    className="flex items-center cursor-pointer gap-2"
                              >
                                    {
                                          i == 0
                                                ? jsx!
                                                : <Image
                                                      src={image!}
                                                      alt="image"
                                                      width={20}
                                                      height={20}
                                                      className="w-5 h-5 self-end cursor-pointer"
                                                />
                                    }

                                    <p>{text!}</p>
                              </div>
                        })}
                  </div>

            </div>

      </div>
}