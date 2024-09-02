import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
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
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center bg-emerald-500  lg:flex">
        <div className="flex flex-col gap-y-2">
          <Image
            src="/assets/builder-logo.svg"
            alt="Finance logo"
            height={100}
            width={100}
          />
          <h2 className="text-white text-3xl font-bold">Builder.io</h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
