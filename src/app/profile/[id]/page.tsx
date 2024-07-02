import { Feeds } from "@/components/homepage/center-screen/feeds/feeds";
import { LeftMenu } from "@/components/homepage/left-screen/left-menu";
import { RightMenu } from "@/components/homepage/right-screen/right-menu";
import Image from "next/image";

export default function ProfilePage() {
      return <section className="flex gap-6 p-6">
            <div className="hidden xl:block w-[20%]">
                  <LeftMenu type="profile" />
            </div>


            <div className="w-full lg:w-[70%] xl:w-[50%]">
                  <div className="flex flex-col gap-6">

                        <div className="flex flex-col items-center justify-center">
                              <div className="w-full h-64 relative">

                                    <Image
                                          src='https://images.unsplash.com/photo-1709668158995-fe822fdc1c40?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                                          alt="image"
                                          fill
                                          className="object-cover rounded-md"
                                    />


                                    <Image
                                          src='https://images.unsplash.com/photo-1704072383973-5f30f9c1076f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'
                                          alt="image"
                                          width={128}
                                          height={128}
                                          className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                                    />

                              </div>

                              <h1 className="mt-20 mb-4 text-2xl font-medium">Elver Weaver</h1>

                              <div className="flex justify-center items-center gap-12 mb-4">

                                    {[1, 2, 3].map((_, i) => {
                                          let num: string;
                                          let text: string;

                                          if (i == 0) {
                                                num = '123'
                                                text = 'Posts'

                                          } else if (i == 1) {
                                                num = "1.2k"
                                                text = 'Followers'

                                          } else {
                                                num = '1.3k'
                                                text = 'Following'
                                          }


                                          return <div
                                                key={i}
                                                className="flex flex-col items-center"
                                          >
                                                <span className="font-medium">{num}</span>
                                                <span className="text-sm">{text}</span>
                                          </div>
                                    })}

                              </div>

                        </div>

                        <Feeds />
                  </div>
            </div>


            <div className="hidden lg:block w-[30%]">
                  <RightMenu userId="test" />
            </div>
      </section>
}