import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <nav>

      <Link href="/">
          <Image
            src={"/logo.png"}
            alt="CareerCraft Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        <div>
          <SignedIn>
            <Link>
            <Button></Button>
            </Link>
          </SignedIn>
        </div>
      </nav>
                  <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </header>
  );
};

export default Header;
