import Image from "next/image";

export function Stories() {
      
      return <div className="bg-white rounded-lg p-4 shadow-md overflow-scroll text-sm scrollbar-hide">
            <div className="flex gap-8 w-max">

                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s, _) => {
                        return <div
                              key={s}
                              className="flex flex-col items-center gap-2 cursor-pointer"
                        >
                              <Image src='https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b' alt="image" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                              <span className="font-medium">Ricky</span>
                        </div>
                  })}

            </div>
      </div>
}