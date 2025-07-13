import { cookies } from "next/headers";
import Features from "./components/home/features";
import Footer from "./components/home/footer";
import Landing from "./components/home/landing";
import Navbar from "./components/home/navbar";

export default async function Home() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId");
  const accessToken = cookieStore.get("access_token");
  const [refreshTokenData, checkAuthorised] = await Promise.all([
    fetch(
      `https://network-spotify-backend.onrender.com/auth/refresh-token/${userId.value}`,
      {
        method: "GET",
      }
    ),
    fetch(`https://network-spotify-backend.onrender.com/auth/get-user-data`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    }),
  ]);
  const checkData = await checkAuthorised.json() 
  return (
    <>
      <Navbar authorisedStatus = {checkData.success}/>
      <Landing />
      <Features />
      <Footer />
    </>
  );
}
