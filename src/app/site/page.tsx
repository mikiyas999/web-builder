import React from "react";

import { cn, constructMetadata } from "@/lib/utils";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-36 h-full ">
      <h2 className="text-4xl font-bold">Welcome to Builder</h2>
    </div>
  );
};

export default HomePage;

export const metadata = constructMetadata();
