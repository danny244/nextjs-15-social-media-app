import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <section className="height flex items-center justify-center">
        <SignIn />
  </section>
}