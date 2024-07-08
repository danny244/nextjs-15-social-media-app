import { notFound } from "next/navigation";

      if (!user) {
            return notFound()
      }

A notFound component that will be displayed on condition






Use optoimistic hook
 useOptimistic is a React Hook that lets you show a different state while an async action is underway.
 is used for updating ui's in react, updating ui in real time

 link https://react.dev/reference/react/useOptimistic#noun-labs-1201738-(2)




 UseActionStateHook
 useActionState is a Hook that allows you to update state based on the result of a form action.

const [state, formAction] = useActionState(fn, initialState, permali


import { useActionState } from "react";

async function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}





NEXTS JS BIND SERVER ACTIONS METHOD READ ABOUT IT

const deletePostWithId = deletePost.bind(null, postId)



"use server"


import { revalidatePath } from "next/cache";
import prisma from "../client";
import { auth } from "@clerk/nextjs/server";

export const deletePost = async (postId: number) => {
      const { userId } = auth();

      if (!userId) throw new Error("User is not authenticated!");

      try {
            await prisma.post.delete({
                  where: {
                        id: postId,
                        userId,
                  },
            });
            revalidatePath("/")


      } catch (error) {
            console.error('Error from [actions.add_post.ts] an error occured adding a new post ', error);
            throw new Error("Something went wrong");
      }
};