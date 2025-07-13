import Link from "next/link";

export default function Navbar() {
  //Check if logged in in it is not then give register and login if not then give generate new QR code
  return (
    <nav className="w-full font-lexend border-b-1 p-3">
      <ul className="flex space-x-6 text-[#004875] font-light">
        <li className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
          <Link href="/">New QR Code</Link>
        </li>
      </ul>
    </nav>
  );
}
