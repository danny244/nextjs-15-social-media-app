import { Posts } from "./posts"

export function Feeds() {
      return <div className="p-4 rounded-lg shadow-md bg-white flex flex-col gap-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p, _) => {
                  return <Posts key={p} />
            })}
      </div>
}