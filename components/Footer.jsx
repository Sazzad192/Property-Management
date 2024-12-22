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
      <div className="px-5 lg:px-32 py-5 border-t-0 md:border-t-2">
        <div className="flex flex-col md:flex-row justify-between py-4 items-center gap-4">
          <Link href="/" aria-label="Go to homepage">
            <h1 className="text-2xl text-primary-500 font-bold">Property</h1>
          </Link>
          <section className="flex gap-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link className="text-gray-600" key={link.href} href={link.href}>
                {link.title}
              </Link>
            ))}
          </section>
          <section className="flex gap-3 text-sm text-gray-600">
            <Link href="#" aria-label="Visit Instagram">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Visit Twitter">
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Visit Snap">
              <FaSnapchatSquare className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Visit Tik tok">
              <FaTiktok className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Visit Link din">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
}
