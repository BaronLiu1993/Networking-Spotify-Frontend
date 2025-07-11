import Popularity from "@/app/components/QR/artist/popularity";
import Underground from "@/app/components/QR/artist/underground";
import { Badge } from "@/shadcomponents/ui/badge";
import { Button } from "@/shadcomponents/ui/button";
import { ArrowRight } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Scan({ searchParams }) {
  //Get User ID From Query Params
  const userAId = await searchParams.id;
  const cookieStore = await cookies();
  const userBId = cookieStore.get("userId");
  const accessToken = cookieStore.get("accessToken");

  const userSyncData = await fetch(
    "https://18158ab10499.ngrok-free.app/profile/analyse",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId1: "4690130c-c146-4ab9-800e-a33e2de2a736",
        userId2: "e310f200-a641-402c-ab8c-5daac579ad8d",
      }),
    }
  );
  const syncData = await userSyncData.json();
  
  //<div>{`Underground Score ${syncData.data.artistScore.score2}`}</div>
  return (
    <>
      <div className="font-lexend">
        <div className="p-10 bg-[#F8F8F8]  flex flex-col">
          <h1 className="text-xl">LiuLiuLiuLiu's Top Artists</h1>
          <Underground score = {syncData.data.artistScore.score2}/>
          <div className="flex flex-col gap-4">
            {syncData.data.artists.spotifyArtistData2.map((data, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4">
                  <Image
                    src={data.image}
                    alt="Profile image"
                    width={128}
                    height={128}
                    className="rounded-xs object-cover"
                  />
                  <div className="flex flex-col gap-4">
                    <div>
                      <Popularity score = {data.popularity}/>
                      <div>
                        {data.name} - {data.followers} Followers
                      </div>
                      <div className="flex gap-2">
                        {data.genre.map((genres, idx) => (
                          <Badge
                            className="text-xs bg-[#E6F5FC] text-[#004875] border-[#004875] border-2"
                            key={idx}
                          >
                            {genres}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Button className="flex items-center justify-center rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white">
                        <span>discover discography</span>
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
