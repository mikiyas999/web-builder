import React from "react";
import Image from "next/image";
import Link from "next/link";

import { currentUser } from "@clerk/nextjs/server";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import logoImage from "../../../../public/assets/plura-logo.svg";
import { ModeToggle } from "@/components/global/mode-togggle";
import { UserButton } from "@clerk/nextjs";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = async ({}) => {
  const user = await currentUser();
  console.log(user);

  return (
    <header className=" fixed  top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
      <aside className="flex items-center gap-2">
        <Image src={logoImage} width={40} height={40} alt="Plura Logo" />
        <span className="text-xl font-bold z-10">Builder.</span>
      </aside>
      <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-inherit p-0 underline-offset-8"
              )}
              href="#"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-inherit p-0 underline-offset-8"
              )}
              href="#"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-inherit p-0 underline-offset-8"
              )}
              href="#"
            >
              Documentation
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-inherit p-0 underline-offset-8"
              )}
              href="#"
            >
              Features
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-2">
        <Link href="/agency" className={cn(buttonVariants())}>
          {user ? "Dashboard" : "Get Started"}
        </Link>
        {user && <UserButton afterSignOutUrl="/" />}
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Navigation;
