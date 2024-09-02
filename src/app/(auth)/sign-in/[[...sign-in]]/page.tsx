import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 w-full">
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="space-y-4 pt-16 text-center">
          <h1 className="text-3xl font-bold text-[#2E2A47] "> welcome back!</h1>
          <p className="text-base text=[#7E8CA0]">
            {" "}
            Log in or create account to get back to your dashboard.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center bg-emerald-500  lg:flex">
        <Image
          src="/assets/plura-logo.svg"
          alt="builder logo"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Page;
