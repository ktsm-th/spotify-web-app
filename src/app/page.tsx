import { SignIn } from "@/components/sign-in";
import UserAvatar from "@/components/user-avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 background">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <SignIn></SignIn>
        <UserAvatar></UserAvatar>
      </div>
    </main>
  );
}
