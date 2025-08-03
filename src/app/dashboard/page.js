import { cookies } from "next/headers";
import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";
import DeleteButton from "../components/dashboard/delete";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId");
  const accessToken = cookieStore.get("access_token");
  
  const [refreshTokenData, checkAuthorised] = await Promise.all([
    fetch(
      `https://network-spotify-backend.onrender.com/auth/refresh-token/${userId?.value}`,
      {
        method: "GET",
      }
    ),
    fetch(`https://network-spotify-backend.onrender.com/auth/get-user-data`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    }),
  ]);

  const checkData = await checkAuthorised.json();

  return (
    <>
      <Navbar authorisedStatus={checkData.success} />
      <main className="font-lexend min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-[#F8F8F8]">
        <div className="max-w-md w-full text-center space-y-6 p-6 rounded-2xl">
          <div className="space-y-1">
            <h1 className="text-3xl font-playfair italic text-[#004875]">
              Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Manage your Spotify integration and personal data settings below.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <DeleteButton accessToken={accessToken?.value} />
          </div>

          <p className="text-xs text-red-500 font-medium">
            ⚠️ Note: These actions are irreversible
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
