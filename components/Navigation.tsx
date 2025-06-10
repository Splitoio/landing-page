import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitoLogo from "@/assets/splito-icon.png";
import { Button } from "./Button";
import { getDashboardUrl } from "@/utils";

export default function Navigation() {
  return (
    <nav className="w-full flex items-center justify-center py-8 absolute top-0 left-0 z-50">
      <div className="w-full max-w-[1440px]  flex items-center justify-between px-4 lg:px-40">
        <Image src={SplitoLogo} alt="Splito" width={102} height={33} />

        <div className="flex items-center gap-4">
          <Link href={getDashboardUrl("/login")}>
            <Button size="sm" variant="secondary">
              Sign in
            </Button>
          </Link>

          <Link href={getDashboardUrl("/signup")}>
            <Button size="sm" variant="primary" showArrow>
              Sign up for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
