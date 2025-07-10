import QRCode from "react-qr-code";

export default function QRGenerator({ userId }) {
  return (
    <>
      <div>
        <QRCode
          size={256}
          value={`https://indie-b-sides-frontend.vercel.app/qr/scan?id=${userId}`}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
}
