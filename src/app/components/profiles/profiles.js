"use client";

import { Button } from "@/shadcomponents/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { Follow } from "@/app/actions/follow";
import { CreatePlaylist } from "@/app/actions/createPlaylist";
import { useState } from "react";

export default function Profiles({ userId1, userId2, userData, spotifyData }) {
  const [followSuccess, setFollowSuccess] = useState(false);
  const [createPlaylistSuccess, setPlaylistSuccess] = useState(false);
  const handleFollow = async () => {
    const response = await Follow(userId1, userId2);
    setFollowSuccess(response.success ? "Worked" : "Failed");
  };

  const handleCreatePlaylist = async () => {
    const response = await CreatePlaylist(userId1, userId2);
    setPlaylistSuccess(response.success ? "Worked" : "Failed");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center p-4 sm:p-6 space-y-6 overflow-hidden">
      <div className="relative w-[250px] sm:w-[350px] h-[200px] sm:h-[240px] transition duration-300 hover:scale-105">
        {spotifyData.user2.image ? (
          <Image
            className="absolute top-0 left-0 w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] object-cover rounded-xl shadow-lg transform rotate-[-10deg] z-10"
            src={spotifyData.user2.image}
            alt="pfp2"
            width={230}
            height={230}
          />
        ) : (
          <div className="absolute top-0 left-0 w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] rounded-xl bg-gray-200 rotate-[10deg]"></div>
        )}

        {spotifyData.user1.image ? (
          <Image
            className="absolute top-2 left-[120px] sm:left-40 w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] object-cover rounded-xl shadow-lg transform rotate-[-10deg]"
            src={spotifyData.user1.image}
            alt="pfp1"
            width={230}
            height={230}
          />
        ) : (
          <div className="absolute top-2 left-[120px] sm:left-40 w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] rounded-xl bg-gray-200 z-10 rotate-[10deg]"></div>
        )}
      </div>

      <div className="flex flex-row justify-center items-start gap-4 sm:gap-16 font-mono w-full flex-wrap text-xs sm:text-sm px-2">
        <div className="text-center sm:text-left space-y-2 max-w-[300px] break-words">
          <h1 className="text-sm sm:text-base underline">{spotifyData.user1.name}&apos;s</h1>
          <h2 className="text-sm sm:text-base underline">Profile</h2>
          <ul className="font-lexend text-xs sm:text-sm text-left space-y-1">
            <li>{`1. ${userData.userData2[0]?.major}`}</li>
            <li>2. {userData.userData2[0]?.year} Year</li>
            <li>
              <div>3. I Love...</div>
              <div className="pl-4">
                {userData.userData2[0]?.interests.map((data, idx) => (
                  <div key={idx}>{data}</div>
                ))}
              </div>
            </li>
            <li>4. St Mikes</li>
            <li className="flex gap-1 items-center">
              <span>5.</span>
              <span className="flex items-center gap-1">
                <Instagram size={14} /> baronliuliuliu
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left space-y-2 max-w-[300px] break-words">
          <h1 className="text-sm sm:text-base underline">{spotifyData.user2.name}</h1>
          <h2 className="text-sm sm:text-base underline">Profile</h2>
          <ul className="font-lexend text-xs sm:text-sm text-left space-y-1">
            <li>1. {userData.userData1[0].major}</li>
            <li>2. {userData.userData1[0].year} Year</li>
            <li>
              <div>3. I Love...</div>
              <div className="pl-4">
                {userData.userData1[0].interests.map((data, idx) => (
                  <div key={idx}>{data}</div>
                ))}
              </div>
            </li>
            <li>4. St Mikes</li>
            <li className="flex gap-1 items-center">
              <span className="flex items-center gap-1">
                Add me on <Instagram size={14} /> baronliuliuliu
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="font-lexend flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm">
        <Button
          onClick={handleFollow}
          className="transform hover:rotate-[-2deg] flex items-center gap-2 rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white px-3 py-1"
        >
          <Image alt="spotify logo" src="/spotify.svg" width={20} height={20} />
          <span>add me on spotify</span>
        </Button>
        <Button
          onClick={handleCreatePlaylist}
          className="transform hover:rotate-[2deg] flex items-center justify-center rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white px-3 py-1"
        >
          <span>create playlist</span>
        </Button>
      </div>
    </div>
  );
}
