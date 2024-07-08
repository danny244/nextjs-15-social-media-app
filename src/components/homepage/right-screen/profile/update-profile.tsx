"use client"

import { updateProfile } from "@/lib/actions/actions.update_profile";
import { User } from "@prisma/client"
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react"
import { UpdateProfileButton } from "./update--profile-button";

export function UpdateUser({ user }: { user: User }) {
      const [open, setOpen] = useState(false);
      const [cover, setCover] = useState<any>();

      const router = useRouter()

      const handleClose = () => {
            setOpen(false);
            state.success && router.refresh()
      };

      const [state, formAction] = useActionState(updateProfile, { success: false, error: false })


      return <div>
            <button
                  onClick={() => setOpen(true)}
                  className="text-xs text-blue-500 cursor-pointer">
                  Update user
            </button>

            {open && <div className="w-screen h-screen top-0 left-0 absolute bg-black bg-opacity-65 flex items-center justify-center z-50">
                  <form
                        action={(formData) =>
                              formAction({ formData, cover: cover?.secure_url || "" })
                        }
                        className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative "
                  >
                        <h1>Update Profile</h1>

                        <p className="mt-4 text-xs text-gray-500">
                              Please Use the Profile Icon at the top right of your screen to change Username or Profile picture
                        </p>


                        <div className="flex flex-col gap-4 my-4">
                              <label htmlFor="">Cover Picture</label>

                              <CldUploadWidget uploadPreset="next_15 social" onSuccess={(result) => setCover(result.info)}>
                                    {({ open }) => {
                                          return <div
                                                className="flex items-center gap-2 cursor-pointer "
                                                onClick={() => open()}
                                          >
                                                <Image
                                                      src={user.cover || '/noCover'}
                                                      alt="img"
                                                      width={48}
                                                      height={32}
                                                      className="w-12 h-8 rounded-md object-cover"
                                                />

                                                <p className="text-xs underline text-gray-600">
                                                      Change
                                                </p>
                                          </div>
                                    }}
                              </CldUploadWidget>


                        </div>


                        <div className='flex flex-wrap justify-between gap-2 xl:gap-4'>
                              {[1, 2, 3, 4, 5, 6, 7].map((_, i) => {
                                    let name: string;
                                    let placeholder: string;
                                    let label: string;

                                    if (i == 0) {
                                          label = 'First Name'
                                          placeholder = user.name || 'John'
                                          name = 'name'

                                    } else if (i == 1) {
                                          label = 'Surname'
                                          placeholder = user.surname || 'Doe'
                                          name = 'surname'

                                    } else if (i == 2) {
                                          label = 'Description'
                                          placeholder = user.description || 'Description....'
                                          name = 'description'

                                    } else if (i == 3) {
                                          label = 'City'
                                          placeholder = user.city || 'New York'
                                          name = 'city'

                                    } else if (i == 4) {
                                          label = 'School'
                                          placeholder = user.school || 'Mit'
                                          name = 'school'

                                    } else if (i == 5) {
                                          label = 'Work'
                                          placeholder = user.work || 'Apple Inc'
                                          name = 'work'

                                    } else {
                                          label = 'Website'
                                          placeholder = user.website || 'website.com'
                                          name = 'website'
                                    }

                                    console.log(name);


                                    return <div
                                          key={i}
                                          className="flex flex-col gap-4">
                                          <label htmlFor="" className="text-xs text-gray-500">
                                                {label}
                                          </label>

                                          <input
                                                type="text"
                                                placeholder={placeholder}
                                                className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                                name={name}
                                          />
                                    </div>
                              })}
                        </div>


                        <UpdateProfileButton />

                        {state.success && <p className="text-green-500">Profile has been updated</p>}
                        {state.error && <p className="text-red-500">Something went wrong</p>}


                        <div
                              className="absolute text-xl right-4 top-3 cursor-pointer"
                              onClick={handleClose}
                        >
                              X
                        </div>

                  </form>
            </div>}
      </div>
}




/*
 <div className='flex flex-wrap justify-between gap-2 xl:gap-4'>
                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          First Name
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.name || 'John'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>



                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          Surname
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.surname || 'Doe'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>


                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          Description
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.description || '.......................'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>


                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          City
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.city || 'New york city'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>


                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          School
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.school || 'MIT'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>


                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          Work
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.work || 'Apple Inc'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>


                              <div className="flex flex-col gap-4">
                                    <label htmlFor="" className="text-xs text-gray-500">
                                          Website
                                    </label>

                                    <input
                                          type="text"
                                          placeholder={user.name || 'lama.dev'}
                                          className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    />
                              </div>
                        </div>
*/