import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    <nav
      className="z-30 py-5 relative flex items-center justify-between
                 mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0"
    >
      {/* logo */}
      <Link href="/">
        <Image alt="logo" src="/hilink-logo.svg" height={29} width={74} />
      </Link>

      {/* links */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-[400] text-gray-50 flex items-center justify-center
                       cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-90 px-8 py-4 text-white transition-all hover:bg-black"
        />
      </div>

      {/* Navigation bar or Hamburger Menu */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
