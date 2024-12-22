"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/const";
import UserInfoBox from "./UserInfoBox";

export default function CommonNav() {
  const pathName = usePathname();
  return (
    <header className="border-b w-full">
      <nav className="grid grid-cols-3 items-center px-5 lg:px-32 py-3">
        {/* Logo Section */}
        <div className="col-span-1">
          <Link href="/" aria-label="Go to homepage">
            <h1 className="text-2xl text-primary-500 font-bold">Property</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="col-span-1 flex gap-2 md:gap-9 items-center justify-center">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={`${
                  pathName === link.href
                    ? "text-primary-400 bg-primary-100"
                    : "text-stone-600"
                } hover:text-primary-400 p-2 font-medium rounded-full text-sm`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Info Section */}
        <div className="col-span-1 flex justify-end">
          <UserInfoBox />
        </div>
      </nav>
    </header>
  );
}
