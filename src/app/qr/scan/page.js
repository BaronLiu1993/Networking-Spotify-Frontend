import Artist from "@/app/components/QR/artist/artist";
import Popularity from "@/app/components/QR/artist/popularity";
import Underground from "@/app/components/QR/artist/underground";
import Tracks from "@/app/components/QR/tracks/tracks";
import { Badge } from "@/shadcomponents/ui/badge";
import { Button } from "@/shadcomponents/ui/button";
import { ArrowRight } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import ClientWrapper from "./clientwrapper";

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
  return (
    <>
      <ClientWrapper syncData = {syncData}/>
    </>
  );
}
