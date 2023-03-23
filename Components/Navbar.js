import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="font-myTupi text-2xl font-medium relative z-20 border-b border-black">
      <ul className="flex justify-evenly items-center">
        <Link href={"/"}>
          <a className="hover:bg-black hover:text-white border-r border-black px-4 py-2 w-full text-left">
            HOME
          </a>
        </Link>
        <Link href={"/design"}>
          <a className="hover:bg-black hover:text-white border-r border-black px-4 py-2 w-full text-left">
            DESIGN
          </a>
        </Link>
        <Link href={"/development"}>
          <a className="hover:bg-black hover:text-white border-r border-black px-4 py-2 w-full text-left">
            DEVELOPMENT
          </a>
        </Link>
        <Link href={"/contact"}>
          <a className="hover:bg-black hover:text-white px-4 py-2 w-full text-left">
            CONTACT
          </a>
        </Link>
      </ul>
    </nav>
  );
}
