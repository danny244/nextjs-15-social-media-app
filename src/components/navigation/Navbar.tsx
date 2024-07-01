import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
      return <div className="h-24 flex items-center justify-between">
            <div className="md:hidden lg:block w-[20%]">
                  <Link
                        href='/'
                        className="text-xl font-bold text-blue-600"
                  >LamaDev</Link>
            </div>

            <div className="hidden md:flex items-center justify-between w-[50%] text-sm gap-6">
                  <div className="flex items-center gap-6 text-gray-600">
                        <Link
                              className="flex gap-2"
                              href='/'
                        >
                              <Image src='/home.png' alt="homepage" width={16} height={16} className="h-6 w-6" />
                              <span>homepage</span>
                        </Link>


                        <Link
                              className="flex gap-2"
                              href='/'
                        >
                              <Image src='/friends.png' alt="Friends" width={16} height={16} className="h-6 w-6" />
                              <span>Friends</span>
                        </Link>


                        <Link
                              className="flex gap-2"
                              href='/'
                        >
                              <Image src='/stories.png' alt="Stories" width={16} height={16} className="h-6 w-6" />
                              <span>Stories</span>
                        </Link>
                  </div>


                  <div className="hidden xl:flex p-3 bg-slate-100 items-center rounded-xl">
                        <input type="text" name="search" id="" placeholder="search..." className="bg-transparent rounded-xl" />
                        <Image src='/search.png' alt="image" height={14} width={14} />
                  </div>

            </div>

            <div className="w-[30%] gap-4 flex items-center justify-end xl:gap-8">
                  <ClerkLoading>
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status" />
                  </ClerkLoading>

                  <ClerkLoaded>
                        <SignedIn>
                              <div className="cursor-pointer">
                                    <Image src='/people.png' alt="image" width={20} height={20} />
                              </div>


                              <div className="cursor-pointer">
                                    <Image src='/messages.png' alt="image" width={20} height={20} />
                              </div>


                              <div className="cursor-pointer">
                                    <Image src='/notifications.png' alt="image" width={20} height={20} />
                              </div>

                              <UserButton />
                        </SignedIn>


                        <SignedOut>
                              <div className="flex items-center gap-2 text-sm">
                                    <Image src='/emoji.png' alt="image" width={20} height={20} />
                                    <Link href='/sign-in'>Login/Register</Link>
                              </div>
                        </SignedOut>
                  </ClerkLoaded>

                  <MobileMenu />
            </div>
      </div>
}