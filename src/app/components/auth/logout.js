"use client"

import { Logout } from "@/app/actions/logout";

export default function LogoutButton() {
  const handleLogout = () => {
    const response = Logout();
    window.location.href = "https://indie-b-sides-frontend.vercel.app";
  };

  return (
    <>
      <button onClick = {handleLogout} className="hover:font-semibold hover:bg-[#F8F8F8] p-1 rounded-md">
        Log Out
      </button>
    </>
  );
}
