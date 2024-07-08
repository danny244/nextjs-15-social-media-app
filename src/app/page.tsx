import { Feeds } from "@/components/homepage/center-screen/feeds/feeds";
import { AddPost } from "@/components/homepage/center-screen/feeds/posts/add-post";
import { Stories } from "@/components/homepage/center-screen/stories/stories";
import { LeftMenu } from "@/components/homepage/left-screen/left-menu";
import { RightMenu } from "@/components/homepage/right-screen/right-menu";

export default function HomePage() {
      return <section className="flex gap-6 p-6">
            <div className="hidden xl:block w-[20%]">
                  <LeftMenu type="home" />
            </div>


            <div className="w-full lg:w-[70%] xl:w-[50%]">
                  <div className="flex flex-col gap-y-6">
                        <Stories />
                        <AddPost />
                        <Feeds />
                  </div>
            </div>


            <div className="hidden lg:block w-[30%]">
                  <RightMenu />
            </div>
      </section>
}