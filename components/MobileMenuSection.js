import navData from "../nav-data/navData";
import Link from "next/link";

function MobileMenuSection({ isOpen, toggle }) {
  return (
    <div
      onClick={toggle}
      className={isOpen ? "fixed top-0 z-50 bg-white w-full h-full" : "hidden"}
    >
      <div className=" flex flex-col">
        <div onClick={toggle} className="self-end m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="self-end text-right mr-6">
          {navData.map((el, id) => (
            <Link key={id} href={`/${el.path}`}>
              <p className="font-black font-mainFont cursor-pointer text-3xl uppercase py-5">
                {el.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenuSection;
