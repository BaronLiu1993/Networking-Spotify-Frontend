"use client";

export default function DeleteButton({ accessToken }) {
  const handleDelete = async () => {
    const response = await fetch(
      "https://network-spotify-backend.onrender.com/auth/delete-account",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    window.location.href = "https://indie-b-sides-frontend.vercel.app";
  };
  return (
    <>
      <button
        onClick={() => handleDelete}
        className="cursor-pointer text-sm rounded-md px-4 py-2 border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white transition"
      >
        Delete Account and Disconnect Spotify Account
      </button>
    </>
  );
}
