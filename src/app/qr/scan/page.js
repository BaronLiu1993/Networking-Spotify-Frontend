import { cookies } from "next/headers";
import ClientWrapper from "./clientwrapper";

export default async function Scan({ searchParams }) {
  //Get User ID From Query Params
  const userId1 = await searchParams.id;
  const messageId = await searchParams.messageId;
  const cookieStore = await cookies();
  const userId2 = cookieStore.get("userId");
  const accessToken = cookieStore.get("accessToken");

  const [userSyncData, profileSyncData] = await Promise.all([
    fetch("https://18158ab10499.ngrok-free.app/profile/analyse", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId1,
        userId2: userId2.value,
      }),
    }),
    fetch("https://18158ab10499.ngrok-free.app/profile/post-scan", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ownerId: userId1,
        scannerId: userId2.value,
        messageId,
      }),
    }),
    fetch(
      `https://18158ab10499.ngrok-free.app/auth/get-user?userId1=${userId1}&userId2=${userId2.value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
  ]);
  const syncData = await userSyncData.json();
  const profileData = await profileSyncData.json();
  console.log(profileData);
  console.log(syncData);
  return (
    <>
      <ClientWrapper
        userId1={userId1}
        userId2={userId2.value}
        syncData={syncData}
        syncUserData={profileData}
      />
    </>
  );
}
