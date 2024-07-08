"use server"

import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import prisma from "../client";
import { revalidatePath } from "next/cache";

export const addPost = async (formdata: FormData, img: string) => {
      try {
            const desc = formdata.get('desc') as string;
            const Desc = z.string().min(1).max(255);

            const validatedDesc = Desc.safeParse(desc);

            if (!validatedDesc.success) {
                  console.error('error occurest adding a new post in [actions.add_posts.ts]');
                  return;
            }

            const { userId } = auth();

            if (!userId) {
                  throw new Error("You are not authenticated");
            }

            await prisma.post.create({
                  data: {
                        desc: validatedDesc.data,
                        userId,
                        img
                  }
            })

            revalidatePath('/')

      } catch (error) {
            console.error('Error from [actions.add_post.ts] an error occured adding a new post ', error);
            throw new Error("Something went wrong");
      }
}