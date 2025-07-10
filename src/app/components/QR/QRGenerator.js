import QRCode from "react-qr-code";

export default function QRGenerator({ userId }) {
  return (
    <>
      <div>
        <QRCode
          size={256}
          value={`https://localhost:3000/scan?userAId=${userId}`}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
}
