"use client";

import QRCode from "react-qr-code";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QRGenerator({ userId, messageId }) {
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch(
        `https://18158ab10499.ngrok-free.app/profile/get-scan`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ messageId, ownerId: userId }),
        }
      );
      const data = await response.json();
      console.log(data)
      //if (data.success) {
      //  window.location.href = `https://indie-b-sides-frontend.vercel.app/qr/scan/qr/scan?id=${data.message}&messageId=${messageId}`
      //}
    }, 3000);

    return () => clearInterval(interval);
  }, [messageId]);
  return (
    <>
      <div>
        <QRCode
          size={256}
          className="rounded-md"
          value={`https://indie-b-sides-frontend.vercel.app/qr/scan?id=${userId}&messageId=${messageId}`}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
}
