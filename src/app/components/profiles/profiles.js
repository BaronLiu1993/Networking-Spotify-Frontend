import { Badge } from "@/shadcomponents/ui/badge";
import { Button } from "@/shadcomponents/ui/button";
import Image from "next/image";

export default function Profiles({ userData, spotifyData }) {
  console.log(userData);
  console.log(spotifyData);
  return (
    <>
      <div className="flex items-center flex-col justify-center">
        {/*Add a pop up effect and a slight bounce to it */}
        <div className="relative w-[350px] h-[350px]">
          {spotifyData.user2.image ? (
            <Image
              className="absolute top-0 left-0 w-[230px] h-[230px] object-cover rounded-xl shadow-lg transform rotate-[-10deg] z-10"
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

        <div className="font-mono flex items-center gap-2">
          <div className="gap-2 items-center">
            <h1 className="text-lg">{spotifyData.user1.name}'s Profile</h1>
            <ul className="font-lexend">
              <li>1. {userData.userData2[0].major}</li>
              <li>2. {userData.userData2[0].year} Year</li>
              <li>
                3.{" "}
                {userData.userData2[0].interests.map((data, idx) => (
                  <Badge key={idx}>{data}</Badge>
                ))}
              </li>
              <li>4. St Mikes</li>
              <li>5. Social Media</li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <div className="gap-2 items-center">
              <h1 className="text-lg">{spotifyData.user2.name}'s Profile</h1>
              <ul className="font-lexend">
                <li>1. {userData.userData1[0].major}</li>
                <li>2. {userData.userData1[0].year} Year</li>
                <li>3. {userData.userData1[0].interests}</li>
                <li>4. St Mikes</li>
                <li>5. Social Media</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="font-lexend">
          <Button>
            <Image src = {"/spotify.svg"} width={28} height={28}/>
            <span>Follow On Spotify</span>
          </Button>
          <Button>Create Joint Playlist</Button>
        </div>
      </div>
    </>
  );
}
