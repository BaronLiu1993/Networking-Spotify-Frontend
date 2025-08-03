import Link from "next/link";
import LogoutButton from "../auth/logout";

export default async function Navbar({ authorisedStatus }) {
  
  return (
    <nav className="w-full font-lexend border-b-1 p-3">
      <ul className="flex space-x-6 text-[#004875] font-light">
        <li className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
          <Link href="/">Home</Link>
        </li>
        {authorisedStatus ? (
          <div className="flex space-x-6">
            <li className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
              <Link href="/">New QR Code</Link>
            </li>
            <LogoutButton />
            <li className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </div>
        ) : (
          <li className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
