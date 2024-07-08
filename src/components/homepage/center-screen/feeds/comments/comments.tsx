import prisma from "@/lib/client";
import Image from "next/image";
import { CommentClient } from "./comment-client";

export async function Comments({ postId }: { postId: number }) {

      const comments = await prisma.comment.findMany({
            where: {
                  postId
            },

            include: {
                  user: true
            },

            orderBy: {
                  createdAt: 'desc'
            }
      })

      return <CommentClient
      comments={comments}
      postId={postId}
      />
}