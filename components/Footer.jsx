import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaSnapchatSquare,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { navLinks } from "@/const";

export default function Footer() {
  return (
    <footer>
      <div className="px-5 lg:px-32 py-5 border-t-0 md:border-t-2 border-gray-300 dark:border-gray-600 mt-10">
        <div className="flex flex-col md:flex-row justify-between py-4 items-center gap-4">
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <h1 className="text-2xl text-primary-500 dark:text-primary-400 font-bold">
              Property
            </h1>
          </Link>

          {/* Navigation Links */}
          <section className="flex gap-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                key={link.href}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </section>

          {/* Social Media Links */}
          <section className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
            <Link href="#" aria-label="Visit Instagram">
              <FaInstagram className="w-5 h-5 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="#" aria-label="Visit Twitter">
              <FaTwitter className="w-5 h-5 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="#" aria-label="Visit Snapchat">
              <FaSnapchatSquare className="w-5 h-5 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="#" aria-label="Visit TikTok">
              <FaTiktok className="w-5 h-5 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="#" aria-label="Visit LinkedIn">
              <FaLinkedin className="w-5 h-5 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
}
