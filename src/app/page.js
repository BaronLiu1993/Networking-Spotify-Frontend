import { cookies } from "next/headers";
import Features from "./components/home/features";
import Footer from "./components/home/footer";
import Landing from "./components/home/landing";
import Navbar from "./components/home/navbar";

export default async function Home() {
  let renderLoggedInNavbar = false;
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId");
    const accessToken = cookieStore.get("access_token");
    if (userId && accessToken) {
      const [refreshTokenData, checkAuthorised] = await Promise.all([
        fetch(
          `https://network-spotify-backend.onrender.com/auth/refresh-token/${userId.value}`,
          {
            method: "GET",
          }
        ),
        fetch(
          `https://network-spotify-backend.onrender.com/auth/get-user-data`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken.value}`,
            },
          }
        ),
      ]);
      const checkData = await checkAuthorised.json();
      renderLoggedInNavbar = checkData.success;
    }
  } catch {
    renderLoggedInNavbar = false;
  }

  return (
    <>
      <Navbar authorisedStatus={renderLoggedInNavbar} />
      <Landing />
      <Features />
      <Footer />
    </>
  );
}
