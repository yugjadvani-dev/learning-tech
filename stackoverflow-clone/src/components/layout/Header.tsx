"use client";

import { SquareStackIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <SquareStackIcon className="h-6 w-6" />
        <span className="font-bold text-lg">Stack Overflow</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/profile" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Profile
        </Link>
        <Link href="/question" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Questions
        </Link>
        <Link href="/tags" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Tags
        </Link>
        <Link href="/users" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Users
        </Link>
        <Link href="/companies" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Companies
        </Link>
        <Link href="/discussions" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Discussions
        </Link>
      </nav>
    </header>
  );
};

export default Header;
