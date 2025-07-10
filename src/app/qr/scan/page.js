import { cookies } from "next/headers";

export default async function Scan({ searchParams }) {
  //Get User ID From Query Params
  const userAId = searchParams.id;
  const cookieStore = await cookies();
  const userBId = cookieStore.get("userId");

  const accessToken = cookieStore.get("accessToken");
  {
    /*const userSyncData = await fetch(
    "https://18158ab10499.ngrok-free.app/profile/analyse",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId1: userAId,
        userId2: userBId,
      }),
    }
  );
  const syncData = await userSyncData.json(); */
  }
  return (
    <>
      <div>{userAId}</div>
      <div>{userBId}</div>
    </>
  );
}
