import Image from "next/image";
import Separator from "@/components/Separator";
import { Label } from "@/components/components";
const SignIn = () => {
  return (
    <main className="mx-auto flex flex-row bg-[#171718] h-screen">
      <div className="basis-1/2 h-full flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold text-start">Create a new account</h2>
        <div className="flex flex-col gap-2">
          <Label controlId="email" text="Email" isImportant />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            size={40}
            className="border border-gray-500 bg-[#171718] py-1 px-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label controlId="password" text="Password" isImportant />
          <input
            type="password"
            name="password"
            id="password"
            size={40}
            placeholder="Create a password"
            className="border border-gray-500 bg-[#171718] py-1 px-3 rounded-lg"
          />
        </div>
        <Separator />
      </div>
      <div className="basis-1/2 h-full w-full">
        <Image
          src={"/sign-in-background.jpg"}
          alt="Sign In Background Image Tile"
          width={1080}
          height={1920}
          className="h-screen w-full object-cover"
        />
      </div>
    </main>
  );
};

export default SignIn;
