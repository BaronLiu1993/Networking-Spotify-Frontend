import { Badge } from "@/shadcomponents/ui/badge";
import { Button } from "@/shadcomponents/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Profiles({ userData, spotifyData }) {
  console.log(userData);
  console.log(spotifyData);
  return (
    <>
      <div className="flex items-center flex-col justify-center p-6">
        {/*Add a pop up effect and a slight bounce to it */}
        <div className="relative w-[350px] h-[240px] transition duration-300 hover:scale-105">
          {spotifyData.user2.image ? (
            <Image
              className="hover: absolute top-0 left-0 w-[230px] h-[230px] object-cover rounded-xl shadow-lg transform rotate-[-10deg] z-10"
              src={spotifyData.user2.image}
              alt="pfp2"
              width={230}
              height={230}
            />
          ) : (
            <div className="absolute top-0 left-0 w-[230px] h-[230px] rounded-xl bg-gray-200 rotate-[10deg]"></div>
          )}

          {spotifyData.user1.image ? (
            <Image
              className="absolute top-2 left-30 w-[130px] h-[130px] object-cover rounded-xl shadow-lg transform rotate-[10deg]"
              src={spotifyData.user1.image}
              alt="pfp1"
              width={230}
              height={230}
            />
          ) : (
            <div className="absolute top-2 left-40 w-[230px] h-[230px] rounded-xl bg-gray-200 z-10 rotate-[10deg]"></div>
          )}
        </div>

        <div className="font-mono flex items-center gap-2 space-x-8 h-[20rem]">
          <div className="gap-2 items-center">
            <h1 className="text-md underline">{spotifyData.user1.name}'s</h1>
            <h2 className="text-md underline">Profile</h2>
            <ul className="font-lexend text-sm">
              <li> {`1. ${userData.userData2[0].major}`}</li>
              <li>2. {userData.userData2[0].year} Year</li>
              <li>
                <div>3. I Love...</div>
                <div className="px-4">
                  {userData.userData2[0].interests.map((data, idx) => (
                    <div key={idx}>{data}</div>
                  ))}
                </div>
              </li>
              <li>4. St Mikes</li>
              <li className="flex gap-2">
                <span>5. </span>
                <span className="flex gap-2">
                  <Instagram /> baronliuliuliu
                </span>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <div className="gap-2 items-center">
              <h1 className="text-md underline">{spotifyData.user2.name}</h1>
              <h2 className="text-md underline">Profile</h2>
              <ul className="font-lexend text-sm">
                <li>1. {userData.userData1[0].major}</li>
                <li>2. {userData.userData1[0].year} Year</li>
                <li>
                  <div>3. I Love...</div>
                  <div className="px-4">
                    {userData.userData1[0].interests.map((data, idx) => (
                      <div key={idx}>{data}</div>
                    ))}
                  </div>
                </li>

                <li>4. St Mikes</li>
                <li className="flex gap-2">
                  <span>5. </span>
                  <span className="flex gap-2">
                    <Instagram /> baronliuliuliu
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="font-lexend flex justify-center items-center gap-6">
          <Button className="transform hover:rotate-[-2deg] hover flex items-center justify-center rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white w-fit ">
            <Image alt="logo" src={"/spotify.svg"} width={28} height={28} />
            <span>Let Us Be Friends!</span>
          </Button>
          <Button className="transform hover:rotate-[2deg] flex items-center justify-center rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white w-fit">
            <span>create playlist</span>
          </Button>
        </div>
      </div>
    </>
  );
}
