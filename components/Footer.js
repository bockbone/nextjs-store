import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#242424] text-white font-mainFont pt-32 pb-12">
      <div className="grid grid-cols-2 gap-4 text-center mx-4 px-5 xl:px-0 md:max-w-screen-xl md:mx-auto md:flex md:text-left  md:justify-between">
        <div className="">
          <h3 className="mb-6">FUNCLOTHING</h3>
          <Link href="/about">
            <a className="text-sm text-[#4B4B4B]">About us</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-6">Navigation</h3>

          <Link href="/products">
            <a className="text-sm text-[#4B4B4B]">Products</a>
          </Link>
          <Link href="/trends">
            <a className="text-sm text-[#4B4B4B] my-2">Trends</a>
          </Link>
          <Link href="/search">
            <a className="text-sm text-[#4B4B4B]">Search</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-6">Company</h3>
          <Link href="/team">
            <a className="text-sm text-[#4B4B4B]">Team</a>
          </Link>
          <Link href="/faq">
            <a className="text-sm text-[#4B4B4B] my-2">FAQ</a>
          </Link>
          <Link href="/career">
            <a className="text-sm text-[#4B4B4B]">Career</a>
          </Link>
        </div>
        <div className="">
          <h3 className="mb-6">Contact</h3>
          <p className="text-sm text-[#4B4B4B]">ask@funclothing.com</p>
          <p className="text-sm text-[#4B4B4B] my-2">+603 - 03030303</p>
          <p className="text-sm text-[#4B4B4B]">Kuala Lumpur, MY</p>
        </div>
      </div>
      <div className="text-center text-sm text-[#4B4B4B] mt-10">
        <p>All right reserved.</p>
        <p>Copyright FUNCLOTHING. 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
