"use client"

import { useFormStatus } from "react-dom"

export function AddNewPostButton() {
      const { pending } = useFormStatus()
      return <button className="bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed">
            {pending
                  ? 'Posting...'
                  : "Post"}
      </button>
}