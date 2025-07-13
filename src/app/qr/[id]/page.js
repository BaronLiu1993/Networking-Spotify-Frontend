import Footer from "@/app/components/home/footer";
import QRGenerator from "@/app/components/QR/QRGenerator";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default async function QR({ params }) {
  const messageId = uuidv4();
  const userId = params.id;
  const profileSyncData = await fetch(
    `https://network-spotify-backend.onrender.com/profile/getUserSpotifyProfile?userId=${userId}`,
    {
      method: "GET",
    }
  );

  const profileData = await profileSyncData.json();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center font-lexend p-6">
          <div className="flex gap-4 items-center">
            <Image
              className="rounded-md"
              src={profileData.spotifyProfile.image}
              alt="pfp"
              width={64}
              height={64}
            />
            <span className="text-lg sm:text-xl font-semibold">
              {profileData.spotifyProfile.name}
            </span>
          </div>
          <QRGenerator userId={userId} messageId={messageId} />
          <div className="text-sm text-gray-600 mt-2">
            Scan the QR code to connect
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
