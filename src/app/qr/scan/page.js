import { cookies } from "next/headers";
import ClientWrapper from "./clientwrapper";

export default async function Scan({ searchParams }) {
  //Get User ID From Query Params
  const userId1 = await searchParams.id;
  const messageId = await searchParams.messageId;
  const cookieStore = await cookies();
  const userId2 = cookieStore.get("userId");
  const accessToken = cookieStore.get("accessToken");

  const [userSyncData, profileSyncData, logDB] = await Promise.all([
    fetch("https://25423d2f6236.ngrok-free.app/profile/analyse", {
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

    fetch(
      `https://25423d2f6236.ngrok-free.app/auth/get-user?userId1=${userId1}&userId2=${userId2.value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
    fetch("https://25423d2f6236.ngrok-free.app/profile/post-scan", {
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
  ]);
  const syncData = await userSyncData.json();
  const profileData = await profileSyncData.json();
  const logDbData = await logDB.json() 
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
