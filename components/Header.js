import { useState } from "react";
import Link from "next/link";
import navData from "../nav-data/navData";
import MobileMenuSection from "./MobileMenuSection";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isToggleSearchBar, setIsToggleSearchBar] = useState(false);
  const toggleSearchBar = () => {
    setIsToggleSearchBar(!isToggleSearchBar);
  };
  return (
    <header className="flex my-10 justify-between items-center md:justify-start md:h-8">
      <div className="cursor-pointer font-mainFont font-black uppercase mx-5 xl:mx-0">
        <Link href="/">FunClothing</Link>
      </div>
      <div onClick={toggle} className="mx-5 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <nav className="hidden md:flex md:mx-5 md:items-center">
        {navData.map((el, id) => (
          <Link key={id} href={`/${el.path}`}>
            <a className="cursor-pointer uppercase mx-4 font-mainFont font-bold hover:text-red-400">
              {el.label}
            </a>
          </Link>
        ))}
        <p
          className="cursor-pointer uppercase mx-4 font-mainFont font-bold"
          onClick={toggleSearchBar}
        >
          Search
        </p>
        <input
          type="text"
          placeholder="Search"
          className={
            isToggleSearchBar
              ? "hidden"
              : "block outline-none border rounded-sm p-2"
          }
        />
      </nav>
      <MobileMenuSection isOpen={isOpen} toggle={toggle} />
    </header>
  );
}

export default Header;
